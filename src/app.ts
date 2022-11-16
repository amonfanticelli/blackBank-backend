import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { userRoutes } from "./routes/users.routes";
import { sessionRoutes } from "./routes/sessions.routes";
import { accountsRoutes } from "./routes/accounts.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/accounts", accountsRoutes);
app.use(handleErrorMiddleware);

export { app };