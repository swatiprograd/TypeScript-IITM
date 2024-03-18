"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var TotalCommission_1 = require("./TotalCommission");
console.log("Welcome to the Sales Commission Calculator System");
console.log("-------------------------------------------------");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the Sales Made (in thousands): ', function (salesInput) {
    var sales = parseFloat(salesInput);
    if (isNaN(sales)) {
        console.log("Please Enter a Valid Sales Input");
    }
    else {
        var commission = (0, TotalCommission_1.getTotalCommission)(sales);
        console.log("The Total Commission is:");
        console.log(commission === -1 ? "Please Enter a Valid Sales Input" : commission);
    }
    rl.close();
});