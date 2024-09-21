const reverseString = function(string) {
    let n = string.length;

    stringArr = string.split("");
    reverseStringArr = [];

    for (let i = 0; i < n; i++) {
        reverseStringArr[i] = stringArr[(n - 1) - i];
    }

    return reverseStringArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
