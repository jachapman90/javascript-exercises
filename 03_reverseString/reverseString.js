const reverseString = function(string) {
    let splitString = string.split("");
    let reversed = [];
    for (let i = splitString.length - 1; i >= 0; i--) {
        let popped = splitString.pop();
        reversed.push(popped);
    }
    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
