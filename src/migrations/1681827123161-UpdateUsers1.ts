import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUsers11681827123161 implements MigrationInterface {
    name = 'UpdateUsers11681827123161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" RENAME COLUMN "road" TO "street"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "buyer" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "buyer"`);
        await queryRunner.query(`ALTER TABLE "adresses" RENAME COLUMN "street" TO "road"`);
    }

}
