const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || !Number.isInteger(numOne) ||
        numTwo < 0 || !Number.isInteger(numTwo)) {
        return 'ERROR';
    }

    let start = numOne;
    let end = numTwo;
    if (numOne > numTwo) {
        start = numTwo;
        end = numOne;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
