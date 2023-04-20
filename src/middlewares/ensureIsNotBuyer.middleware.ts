import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

const ensureIsNotBuyerMiddleware = ( req: Request, res: Response, next: NextFunction ) => {
    if( req.user.buyer ){
        throw new AppError( 403, "You don't have permission!" );
    }

    return next();
}

export { ensureIsNotBuyerMiddleware };