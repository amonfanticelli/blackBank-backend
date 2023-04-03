"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionController = void 0;
const createSession_services_1 = require("../../services/sessions/createSession.services");
const createSessionController = async (req, res) => {
    const token = await (0, createSession_services_1.createSessionService)(req.body);
    return res.json({ token: token });
};
exports.createSessionController = createSessionController;
//# sourceMappingURL=createSession.controller.js.map