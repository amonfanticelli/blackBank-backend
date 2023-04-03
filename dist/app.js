"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const handleError_middleware_1 = require("./middlewares/handleError.middleware");
const users_routes_1 = require("./routes/users.routes");
const sessions_routes_1 = require("./routes/sessions.routes");
const accounts_routes_1 = require("./routes/accounts.routes");
const transactions_routes_1 = require("./routes/transactions.routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/users", users_routes_1.userRoutes);
app.use("/login", sessions_routes_1.sessionRoutes);
app.use("/accounts", accounts_routes_1.accountsRoutes);
app.use("/transactions", transactions_routes_1.transactionsRoutes);
app.use(handleError_middleware_1.handleErrorMiddleware);
//# sourceMappingURL=app.js.map