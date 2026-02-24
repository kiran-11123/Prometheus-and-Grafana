"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostrequestCounterFunction = PostrequestCounterFunction;
const prom_client_1 = __importDefault(require("prom-client"));
const PostRequestCounter = new prom_client_1.default.Counter({
    name: "post_request_count",
    help: "Total Post request counts",
    labelNames: ['method', 'route']
});
function PostrequestCounterFunction(req, res, next) {
    PostRequestCounter.inc({
        method: req.method,
        route: req.route
    });
}
