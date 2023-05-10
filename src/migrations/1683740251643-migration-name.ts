import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationName1683740251643 implements MigrationInterface {
    name = 'MigrationName1683740251643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "token" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "token"`);
    }

}
