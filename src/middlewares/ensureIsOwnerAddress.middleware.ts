import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import AppError from "../errors/AppError";
import User from "../database/entities/users.entity";

const ensureIsOwnerAddressMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { params: { adressId }, user: { id } } = req

    const searchUser = await AppDataSource.getRepository(User).findOneOrFail({
        where: {
            id: id
        },
        relations: {
            address: true
        }
    }).catch(reason => { throw new AppError(404, "User not found!") })

    if (searchUser.address.id !== adressId) {
        throw new AppError(403, "You don't have permission!");
    }

    next();
}

export { ensureIsOwnerAddressMiddleware };