import "dotenv/config";
import { NextFunction, Request, Response } from "express";

const returnTestMiddleware = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    return next();
};

export default returnTestMiddleware;
