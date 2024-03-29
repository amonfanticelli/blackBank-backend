"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTables1668468302063 = void 0;
class createTables1668468302063 {
    name = 'createTables1668468302063';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "balance" integer NOT NULL, CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "debitedAccountId" uuid, "creditedAccountId" uuid, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "accountId" uuid, CONSTRAINT "REL_42bba679e348de51a699fb0a80" UNIQUE ("accountId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_e48084dca44e4ce200cb6c295d8" FOREIGN KEY ("debitedAccountId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_90970e74d61cc1e18df1564e3be" FOREIGN KEY ("creditedAccountId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_42bba679e348de51a699fb0a803" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_42bba679e348de51a699fb0a803"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_90970e74d61cc1e18df1564e3be"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_e48084dca44e4ce200cb6c295d8"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TABLE "accounts"`);
    }
}
exports.createTables1668468302063 = createTables1668468302063;
//# sourceMappingURL=1668468302063-createTables.js.map