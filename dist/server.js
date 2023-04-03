"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const data_source_1 = require("./data-source");
require("dotenv/config");
(async () => {
    await data_source_1.AppDataSource.initialize().catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
    app_1.app.listen(process.env.PORT || 3000, () => {
        console.log("Servidor executando");
    });
})();
//# sourceMappingURL=server.js.map