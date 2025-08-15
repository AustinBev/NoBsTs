"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_ts_1 = require("./functions.ts");
console.log((0, functions_ts_1.default)(1, 2)); // 3
console.log((0, functions_ts_1.concatTwoStrings)('Hello', 'World')); // Hello + World
console.log((0, functions_ts_1.concatTwoStringsFunc)('Hello', 'World')); // Hello World
console.log((0, functions_ts_1.format)('title here', 2));
