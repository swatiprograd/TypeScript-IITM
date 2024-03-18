export function getCompoundAmount(principal: number, time: number, rate: number): number {
    let compoundAmount: number;

    compoundAmount = principal * Math.pow((1 + rate / 100), time);
    return compoundAmount;
}