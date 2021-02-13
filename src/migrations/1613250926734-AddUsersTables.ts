import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsersTables1613250926734 implements MigrationInterface {
  name = 'AddUsersTables1613250926734';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "fullName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "styles"."createdAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "styles"."updatedAt" IS NULL`);
    await queryRunner.query(
      `COMMENT ON COLUMN "categories"."createdAt" IS NULL`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "categories"."updatedAt" IS NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `COMMENT ON COLUMN "categories"."updatedAt" IS NULL`,
    );
    await queryRunner.query(
      `COMMENT ON COLUMN "categories"."createdAt" IS NULL`,
    );
    await queryRunner.query(`COMMENT ON COLUMN "styles"."updatedAt" IS NULL`);
    await queryRunner.query(`COMMENT ON COLUMN "styles"."createdAt" IS NULL`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
