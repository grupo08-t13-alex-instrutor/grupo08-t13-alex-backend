import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1681495137328 implements MigrationInterface {
    name = 'InitialMigration1681495137328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_ae189a61e74b46c52bbc144affa"`);
        await queryRunner.query(`ALTER TABLE "images" RENAME COLUMN "advertisemmentId" TO "advertisementId"`);
        await queryRunner.query(`ALTER TABLE "adverts" ALTER COLUMN "published" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_b70fa3486870bb59477e9505ca0" FOREIGN KEY ("advertisementId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_b70fa3486870bb59477e9505ca0"`);
        await queryRunner.query(`ALTER TABLE "adverts" ALTER COLUMN "published" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "images" RENAME COLUMN "advertisementId" TO "advertisemmentId"`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_ae189a61e74b46c52bbc144affa" FOREIGN KEY ("advertisemmentId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
