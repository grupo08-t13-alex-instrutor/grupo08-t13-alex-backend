import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../database/entities/adverts.entity";
import User from "../../database/entities/users.entity";


const listCommentsAnAdsService = async (idAds: string) => {

    const advertisementRepository = AppDataSource.getRepository(Advertisement)
    const userRepository = AppDataSource.getRepository(User)

    const ads = await advertisementRepository.findOne({
        where: {
            id: idAds
        },
        relations: {
            comments: true
        }
    });

    const user = await userRepository.find({
        relations: {
            comments: true
        }
    })


    const userComments = user.map((e, index, array) => {
        return {
            comment: e.comments,
            user: {
                id: e.id,
                name: e.name,
                email: e.email,
                cpf: e.cpf,
                createdAt: e.createdAt,
                updatedAt: e.updatedAt,
                description: e.description,
            }
        }
    })

    let arrayUserComments = []

    /// percorrendo o array de comentários do "advertisementRepository"
    ads.comments.forEach((e) => {
        /// percorrendo o array de comentários do "userRepository"
        userComments.forEach((el) => {
            /// percorrendo o array comment do "userComments" que foi construido a partir do user do "userRepository"
            el.comment.forEach((ele) => {
                /// comparando os "ids" e caso eles sejam iguais retornam um novo objeto que vai ser usado no retorno da função "listCommentsAnAdsService"
                if (e.id === ele.id) {
                    const { user } = el

                    const values = {
                        user: user,
                        comment: ele
                    }

                    arrayUserComments.push(values)
                }
            })
        })
    });


    const { brand, color, createdAt, description, fuel, id, images, mileage, model, price, published, year } = ads

    const AdsValues = {
        id: id,
        brand: brand,
        model: model,
        year: year,
        fuel: fuel,
        mileage: mileage,
        color: color,
        images: images,
        price: price,
        description: description,
        published: published,
        createdAt: createdAt,
    }

    return {
        advertisement: AdsValues,
        comments: arrayUserComments
    }
}

export default listCommentsAnAdsService