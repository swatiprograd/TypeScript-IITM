"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompoundAmount = void 0;
function getCompoundAmount(principal, time, rate) {
    var compoundAmount;
    compoundAmount = principal * Math.pow((1 + rate / 100), time);
    return compoundAmount;
}
exports.getCompoundAmount = getCompoundAmount;
