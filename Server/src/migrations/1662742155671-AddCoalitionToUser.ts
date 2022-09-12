import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCoalitionToUser1662742155671 implements MigrationInterface {
    name = 'AddCoalitionToUser1662742155671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_status_enum" AS ENUM('online', 'offline', 'playing')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "status" "public"."user_status_enum" NOT NULL DEFAULT 'offline'`);
        await queryRunner.query(`ALTER TABLE "user" ADD "coalition" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "coalition"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."user_status_enum"`);
    }

}
