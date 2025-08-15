"use strict";
// to run in terminal: npx ts-node functions-test.ts
// the "): number" is the explicit return type; TS could infer this
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatTwoStrings = void 0;
exports.default = addTwoNums;
exports.concatTwoStringsFunc = concatTwoStringsFunc;
// Default export: Adds two numbers
function addTwoNums(a, b) {
    return a + b;
}
// Named export: Concatenates two strings with a plus sign between
var concatTwoStrings = function (first, second) {
    return "".concat(first, " + ").concat(second);
};
exports.concatTwoStrings = concatTwoStrings;
// Named export: Concatenates two strings with a space between
function concatTwoStringsFunc(first, second) {
    return "".concat(first, " ").concat(second);
}
// Formats a title and parameter into a single string
// Prints the formatted title and parameter to the console
// Returns a resolved Promise with a string showing "data from <url>"
// Combines a salutation with any number of names into a single string
// Returns the user's first and last name as a single string
