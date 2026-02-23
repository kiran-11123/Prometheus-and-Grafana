"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activeuserFunction = activeuserFunction;
const prom_client_1 = __importDefault(require("prom-client"));
const ActiveUserGauge = new prom_client_1.default.Gauge({
    name: "active_users",
    help: "Total number of users",
    labelNames: ["method", "route"]
});
function activeuserFunction(req, res, next) {
    ActiveUserGauge.inc({
        method: req.method,
        route: req.path
    });
    res.on("finish", () => {
        ActiveUserGauge.dec({
            method: req.method,
            route: req.path
        });
    });
    next();
}
