import { DataSource } from "typeorm";
import "reflect-metadata";
import { User } from "./entities/user.entity";
import { Contacts } from "./entities/contact.entity";
import { initial1680650573253 } from "./migrations/1680650573253-initial";

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test"
        ? {
              type: "sqlite",
              database: ":memory:",
              synchronize: true,
              entities: ["src/entities/*.ts"],
          }
        : {
              type: "sqlite",
              database: "db.sqlite3",
              logging: true,
              synchronize: false,
              entities: [User, Contacts],
              migrations: [initial1680650573253],
          }
);

export default AppDataSource;
