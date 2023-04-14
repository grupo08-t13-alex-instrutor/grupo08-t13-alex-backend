import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateImages1681500235202 implements MigrationInterface {
    name = 'UpdateImages1681500235202'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_b70fa3486870bb59477e9505ca0"`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_b70fa3486870bb59477e9505ca0" FOREIGN KEY ("advertisementId") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_b70fa3486870bb59477e9505ca0"`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_b70fa3486870bb59477e9505ca0" FOREIGN KEY ("advertisementId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
