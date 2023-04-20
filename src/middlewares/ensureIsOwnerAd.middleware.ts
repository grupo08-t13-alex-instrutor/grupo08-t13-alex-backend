import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Advertisement } from "../entities/adverts.entity";
import AppError from "../errors/AppError";

const ensureIsOwnerAdMiddleware = async ( req: Request, res: Response, next: NextFunction ) => {
    const { params: { advertisementId }, user: { id } } = req

    const searchAd = await AppDataSource.getRepository( Advertisement ).findOneOrFail({
        where: {
            id: advertisementId
        },
        relations: {
            user: true
        }
    }).catch( reason => { throw new AppError( 404, "Advertisement not found!" )})

    if( searchAd.user.id !== id ){
        throw new AppError( 403, "You don't have permission!" );
    }

    next();
}

export { ensureIsOwnerAdMiddleware };