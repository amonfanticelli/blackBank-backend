"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRoutes = void 0;
const createSession_controller_1 = require("../controllers/sessions/createSession.controller");
const express_1 = require("express");
const sessionRoutes = (0, express_1.Router)();
exports.sessionRoutes = sessionRoutes;
sessionRoutes.post("", createSession_controller_1.createSessionController);
//# sourceMappingURL=sessions.routes.js.map