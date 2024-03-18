"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Rate_1 = require("./Rate");
var CompoundAmount_1 = require("./CompoundAmount");
console.log("Welcome to XYZ Bank's Fixed Deposit Scheme");
console.log("-------------------------------------------------");
console.log("Enter the Principal Amount:");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('', function (principal) {
    var principalAmount = parseFloat(principal);
    console.log("Enter the Time:");
    rl.question('', function (time) {
        var timePeriod = parseInt(time);
        console.log("The Rate is:");
        var rate = (0, Rate_1.getRate)(principalAmount, timePeriod);
        console.log(rate);
        console.log("The Final Amount Payable will be Rs:");
        var compoundAmount = (0, CompoundAmount_1.getCompoundAmount)(principalAmount, timePeriod, rate);
        console.log(compoundAmount);
        rl.close();
    });
});
