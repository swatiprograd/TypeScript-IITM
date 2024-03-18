import * as readline from 'readline';
import { getTotalCommission } from './TotalCommission';

console.log("Welcome to the Sales Commission Calculator System");
console.log("-------------------------------------------------");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the Sales Made (in thousands): ', (salesInput: string) => {
    const sales: number = parseFloat(salesInput);

    if (isNaN(sales)) {
        console.log("Please Enter a Valid Sales Input");
    } else {
        const commission: number = getTotalCommission(sales);
        console.log("The Total Commission is:");
        console.log(commission === -1 ? "Please Enter a Valid Sales Input" : commission);
    }

    rl.close();
});