"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalCommission = void 0;
function getTotalCommission(sales) {
    var commission;
    if (sales > 50000) {
        commission = sales * 0.30;
    }
    else if (sales > 40000) {
        commission = sales * 0.20;
    }
    else if (sales > 30000) {
        commission = sales * 0.15;
    }
    else if (sales > 20000) {
        commission = sales * 0.10;
    }
    else if (sales > 10000) {
        commission = sales * 0.08;
    }
    else if (sales >= 0) {
        commission = sales * 0.05;
    }
    else {
        commission = -1;
    }
    return commission;
}
exports.getTotalCommission = getTotalCommission;
