import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1680650573253 implements MigrationInterface {
    name = 'initial1680650573253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" varchar PRIMARY KEY NOT NULL, "avatar" varchar NOT NULL, "username" varchar NOT NULL, "email" varchar NOT NULL, "telephone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "usersId" varchar)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "avatar" varchar NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "email" varchar NOT NULL, "telephone" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"))`);
        await queryRunner.query(`CREATE TABLE "temporary_contacts" ("id" varchar PRIMARY KEY NOT NULL, "avatar" varchar NOT NULL, "username" varchar NOT NULL, "email" varchar NOT NULL, "telephone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "usersId" varchar, CONSTRAINT "FK_3f7bf7e6bd93b4ce2b5fcfeaa59" FOREIGN KEY ("usersId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contacts"("id", "avatar", "username", "email", "telephone", "createdAt", "updatedAt", "usersId") SELECT "id", "avatar", "username", "email", "telephone", "createdAt", "updatedAt", "usersId" FROM "contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`ALTER TABLE "temporary_contacts" RENAME TO "contacts"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME TO "temporary_contacts"`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" varchar PRIMARY KEY NOT NULL, "avatar" varchar NOT NULL, "username" varchar NOT NULL, "email" varchar NOT NULL, "telephone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "usersId" varchar)`);
        await queryRunner.query(`INSERT INTO "contacts"("id", "avatar", "username", "email", "telephone", "createdAt", "updatedAt", "usersId") SELECT "id", "avatar", "username", "email", "telephone", "createdAt", "updatedAt", "usersId" FROM "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
