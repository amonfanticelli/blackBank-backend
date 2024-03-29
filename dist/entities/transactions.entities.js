"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const accounts_entities_1 = require("./accounts.entities");
let Transaction = class Transaction {
    id;
    debitedAccount;
    creditedAccount;
    value;
    createdAt;
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Transaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => accounts_entities_1.Account),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", accounts_entities_1.Account)
], Transaction.prototype, "debitedAccount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => accounts_entities_1.Account),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", accounts_entities_1.Account)
], Transaction.prototype, "creditedAccount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Transaction.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Transaction.prototype, "createdAt", void 0);
Transaction = __decorate([
    (0, typeorm_1.Entity)("transactions"),
    __metadata("design:paramtypes", [])
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=transactions.entities.js.map