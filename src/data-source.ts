import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Address } from "./entities/adresses.entity";
import { User } from "./entities/users.entity";
import { Advertisement } from "./entities/adverts.entity";
import { Comment } from "./entities/comments.entity";
import { Image } from "./entities/images.entity";

const dataSourceConfig = (): DataSourceOptions => {
  const entities = [Address, Advertisement, Comment, Image, User];
  const migrations = [
  ];

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
