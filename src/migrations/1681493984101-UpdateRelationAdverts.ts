import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRelationAdverts1681493984101 implements MigrationInterface {
    name = 'UpdateRelationAdverts1681493984101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(250) NOT NULL, "cpf" character varying(11) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "telephone" integer NOT NULL, "date_of_birth" character varying NOT NULL, "description" character varying(300) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying(8) NOT NULL, "state" character varying(150) NOT NULL, "city" character varying(150) NOT NULL, "road" character varying(150) NOT NULL, "number" integer NOT NULL, "complement" character varying(200) NOT NULL, "userId" uuid, CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "link" character varying NOT NULL, "advertisementId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adverts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(250) NOT NULL, "model" character varying(250) NOT NULL, "year" character varying(4) NOT NULL, "fuel" character varying NOT NULL, "mileage" integer NOT NULL, "color" character varying(50) NOT NULL, "price" integer NOT NULL, "description" character varying(300) NOT NULL, "published" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_36876931b51109a932d0bf3b40a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(300) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "advertisementId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_b4f5c94493f23641866f161e212" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_b70fa3486870bb59477e9505ca0" FOREIGN KEY ("advertisementId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_889b53a3793fc35778644069dc7" FOREIGN KEY ("advertisementId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_889b53a3793fc35778644069dc7"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_b70fa3486870bb59477e9505ca0"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_b4f5c94493f23641866f161e212"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "adverts"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "adresses"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
