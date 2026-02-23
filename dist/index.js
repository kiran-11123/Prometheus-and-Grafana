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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//prom-express
const app = (0, express_1.default)();
app.use(express_1.default.json());
function middleware(req, res, next) {
    const startTime = Date.now();
    next();
    const endTime = Date.now() - startTime;
    console.log("Total Time took is ", endTime, "ms");
}
app.use(middleware);
app.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = {
        name: "Kiran",
        age: 30
    };
    res.status(200).json({
        message: "First GET request",
    });
}));
app.post("/user", middleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({
        message: "First POST request"
    });
}));
app.listen(5000, () => {
    console.log("Server is running");
});
