import * as readline from 'readline';
import { getRate } from './Rate';
import { getCompoundAmount } from './CompoundAmount';

console.log("Welcome to XYZ Bank's Fixed Deposit Scheme");
console.log("-------------------------------------------------");
console.log("Enter the Principal Amount:");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (principal: string) => {
    const principalAmount = parseFloat(principal);
    console.log("Enter the Time:");
    rl.question('', (time: string) => {
        const timePeriod = parseInt(time);

        console.log("The Rate is:");
        const rate = getRate(principalAmount, timePeriod);
        console.log(rate);
        console.log("The Final Amount Payable will be Rs:");

        const compoundAmount = getCompoundAmount(principalAmount, timePeriod, rate);
        console.log(compoundAmount);

        rl.close();
    });
});