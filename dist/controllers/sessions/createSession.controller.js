"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionController = void 0;
const createSession_services_1 = require("../../services/sessions/createSession.services");
const createSessionController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield (0, createSession_services_1.createSessionService)(req.body);
    return res.json({ token: token });
});
exports.createSessionController = createSessionController;
//# sourceMappingURL=createSession.controller.js.map