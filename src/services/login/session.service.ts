import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../database/entities/users.entity";
import AppError from "../../errors/AppError";
import jwt from "jsonwebtoken";
import { iUserLoginReq } from "../../interfaces/session/request";
import { iUserLoginRes } from "../../interfaces/session/response";

const sessionService = async ({ email, password }: iUserLoginReq): Promise<iUserLoginRes> => {

    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
        email: email,
    });

    if (!user) {
        throw new AppError(400, "User is not exists or invalidate email!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
        throw new AppError(403, "Invalid email or password");
    }

    const token = jwt.sign(
        {
            type: user.email,
            buyer: user.buyer,
        },
        process.env.SECRET_KEY,
        {
            subject: user.id,
            expiresIn: "24h",
        }
    );

    return { token: token };
}


export default sessionService