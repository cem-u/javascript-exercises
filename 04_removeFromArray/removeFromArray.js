const removeFromArray = function(arr) {
    for (let i = 1; i < arguments.length; i++) {
        for (let j = arr.length - 1; j >= 0; j--) {
            if (arr[j] === arguments[i]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
