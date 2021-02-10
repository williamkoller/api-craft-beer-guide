import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnRefInTableStyles1612923832737
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "styles" ADD COLUMN "ref" varchar;');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "styles" DROP COLUMN "ref";');
  }
}
