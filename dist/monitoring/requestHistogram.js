"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestHistogramFunction = requestHistogramFunction;
const prom_client_1 = __importDefault(require("prom-client"));
const requestHistogram = new prom_client_1.default.Histogram({
    name: "request_duration_seconds",
    help: "Duration of HTTP requests in seconds",
    labelNames: ["method", "route", "status_code"],
    buckets: [0.1, 5, 15, 50, 100, 300, 500, 3000, 5000, 10000]
});
function requestHistogramFunction(req, res, next) {
    const startTime = Date.now();
    res.on("finish", () => {
        const endTime = Date.now();
        requestHistogram.observe({
            method: req.method,
            route: req.path,
            status_code: res.statusCode
        }, (endTime - startTime) / 1000);
    });
    next();
}
