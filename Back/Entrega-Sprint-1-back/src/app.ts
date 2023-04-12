import express, { Application } from "express";
import "express-async-errors";
import "reflect-metadata";
import { errorIdentify } from "./errors/app.Error";
import { contactsRoutes } from "./routers/contacts.router";
import { loginRoutes } from "./routers/login.router";
import { userRoutes } from "./routers/user.router";
import cors from "cors";

export const app: Application = express();

app.use(express.json());

app.use(cors());
// app.use(cors());
app.use("/users", userRoutes);

app.use("/contacts", contactsRoutes);

app.use("/login", loginRoutes);

app.use(errorIdentify);
