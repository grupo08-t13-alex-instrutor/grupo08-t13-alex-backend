import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import jwt from "jsonwebtoken";
import { iUserLoginRequest } from "../../interfaces/login";

const sessionService = async ({ email, password }: iUserLoginRequest) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneByOrFail({ email: email })
        .catch( reason => { throw new AppError( 403, "Invalid email or password" )})

    const isPassword = await compare(password, user.password)
        .catch( reason => { throw new AppError( 403, "Invalid email or password" )});

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

    return token;
}

export default sessionService