import axios from 'axios';
import crypto from 'crypto';
// 👇 FIX 1: Default import use kiya hai (mismatch hatane ke liye)
import Order from '../models/Order.js'; 

const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID;
const SALT_KEY = process.env.PHONEPE_SALT_KEY;
const SALT_INDEX = process.env.PHONEPE_SALT_INDEX;
const PHONEPE_API_URL = process.env.PHONEPE_API_URL;

export const initiatePayment = async (req: any, res: any) => {
  try {
    const { orderId, amount, phone, name } = req.body;

    // 👇 FIX 2: Variable use kar liya (verify karne ke liye ki order DB mein hai)
    // Isse 'value never read' wala error bhi chala jayega
    const existingOrder = await Order.findById(orderId);
    if (!existingOrder) {
      return res.status(404).json({ success: false, message: "Order nahi mila bhai!" });
    }

    const amountInPaisa = Math.round(amount * 100);

    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: `TXN_${orderId}_${Date.now()}`,
      merchantUserId: `USER_${phone}`,
      amount: amountInPaisa,
      redirectUrl: `https://zovixindia.com/payment-status/${orderId}`,
      redirectMode: "POST",
      callbackUrl: `https://api.zovixindia.com/api/payment/webhook`,
      mobileNumber: phone,
      paymentInstrument: { type: "PAY_PAGE" },
    };

    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
    const stringToHash = base64Payload + "/pg/v1/pay" + SALT_KEY;
    const sha256 = crypto.createHash('sha256').update(stringToHash).digest('hex');
    const checksum = sha256 + "###" + SALT_INDEX;

    const response = await axios.post(
      PHONEPE_API_URL!,
      { request: base64Payload },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': checksum,
          'accept': 'application/json',
        },
      }
    );

    if (response.data.success) {
      res.status(200).json({
        success: true,
        url: response.data.data.instrumentResponse.redirectInfo.url,
      });
    } else {
      res.status(400).json({ success: false, message: "PhonePe response failed" });
    }

  } catch (error: any) {
    console.error("PhonePe Error:", error.response?.data || error.message);
    res.status(500).json({ success: false, message: "Payment Initiation Failed" });
  }
};