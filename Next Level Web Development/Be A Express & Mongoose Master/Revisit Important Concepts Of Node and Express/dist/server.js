"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const product_routes_1 = require("./routes/product.routes");
const server = (0, http_1.createServer)((req, res) => {
    (0, product_routes_1.routeHandler)(req, res);
});
server.listen(5000, () => {
    console.log('server is running...');
});
//# sourceMappingURL=server.js.map