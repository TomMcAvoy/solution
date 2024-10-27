"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const debug_1 = __importDefault(require("debug"));
const app = (0, express_1.default)();
const port = 3000;
const log = (0, debug_1.default)('app:server');
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});
app.listen(port, () => {
    log(`Server is running at http://localhost:${port}`);
});
