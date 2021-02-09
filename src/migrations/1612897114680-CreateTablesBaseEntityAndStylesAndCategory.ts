import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablesBaseEntityAndStylesAndCategory1612897114680
  implements MigrationInterface {
  name = 'CreateTablesBaseEntityAndStylesAndCategory1612897114680';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "styles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "name" character varying NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_1f22d2e5045f508c5fce0eb6e86" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "overallImpression" character varying NOT NULL, "aroma" character varying NOT NULL, "appearance" character varying NOT NULL, "mouthFelling" character varying NOT NULL, "comments" character varying NOT NULL, "history" character varying NOT NULL, "characteristicIngredients" character varying NOT NULL, "styleComparison" character varying NOT NULL, "vitalStatistics" jsonb NOT NULL, "commercialExamples" text array NOT NULL, "tags" text array NOT NULL, "styleId" uuid, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "categories" ADD CONSTRAINT "FK_c4b4faedbe8aed88bbd927c951c" FOREIGN KEY ("styleId") REFERENCES "styles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "query-result-cache"`);
    await queryRunner.query(
      `ALTER TABLE "categories" DROP CONSTRAINT "FK_c4b4faedbe8aed88bbd927c951c"`,
    );
    await queryRunner.query(`DROP TABLE "categories"`);
    await queryRunner.query(`DROP TABLE "styles"`);
  }
}
