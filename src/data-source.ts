import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Address } from "./entities/adresses.entity";
import { User } from "./entities/users.entity";
import { Advertisement } from "./entities/adverts.entity";
import { Comment } from "./entities/comments.entity";
import { Image } from "./entities/images.entity";
import { InitialMigration1681495137328 } from "./migrations/1681495137328-InitialMigration";
import { UpdateImages1681500235202 } from "./migrations/1681500235202-UpdateImages";

const dataSourceConfig = (): DataSourceOptions => {
  const entities = [Address, Advertisement, Comment, Image, User];
  const migrations = [
    InitialMigration1681495137328,
    UpdateImages1681500235202
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
