import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Address } from "./database/entities/adresses.entity";
import { User } from "./database/entities/users.entity";
import { Advertisement } from "./database/entities/adverts.entity";
import { Comment } from "./database/entities/comments.entity";
import { Image } from "./database/entities/images.entity";
import { InitialMigration1682021578734 } from "./migrations/1682021578734-InitialMigration";

const dataSourceConfig = (): DataSourceOptions => {
  const entities = [Address, Advertisement, Comment, Image, User];
  const migrations = [
    InitialMigration1682021578734
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
