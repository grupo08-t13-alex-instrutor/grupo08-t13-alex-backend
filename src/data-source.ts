import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Address } from "./database/entities/adresses.entity";
import { Advertisement } from "./database/entities/adverts.entity";
import { Comment } from "./database/entities/comments.entity";
import { Image } from "./database/entities/images.entity";
import { User } from "./database/entities/users.entity";
import { CreatedEntitiesTokenUser1682704715181 } from "./migrations/1682704715181-CreatedEntitiesTokenUser";

const dataSourceConfig = (): DataSourceOptions => {
    const entities = [Address, Advertisement, Comment, Image, User];
    const migrations = [CreatedEntitiesTokenUser1682704715181];

    const entitiesPath: string = path.join(__dirname, "./entities/*.{js,ts}");
    const migrationsPath: string = path.join(
        __dirname,
        "./migrations/*.{js,ts}"
    );

    const nodeEnv = process.env.NODE_ENV;

    if (nodeEnv === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: entities,
            migrations: migrations,
        };
    }
    return {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: false,
        entities: entities,
        migrations: migrations,
        synchronize: false,
    };
};

const AppDataSource = new DataSource(dataSourceConfig());

export { AppDataSource };
