import { type Request, type Response } from 'express';
interface MulterRequest extends Request {
    file?: any;
}
export declare const createProduct: (req: MulterRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getProducts: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getProductById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
//# sourceMappingURL=productController.d.ts.map