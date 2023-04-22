import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token = req.headers.authorization;
    
    if (!token) {
        throw new AppError(401, "Invalid Token");
    }
    
    token = token.split(" ")[1];
    
    return jwt.verify(token, process.env.SECRET_KEY, (error: Error, decoded: JwtPayload) => {
        if (error) {
            throw new AppError(401, "Invalid Token");
        }

        req.user = {
            id: decoded.sub,
            buyer: decoded.buyer
        };

        return next();
    });
};

export default ensureAuthMiddleware;
