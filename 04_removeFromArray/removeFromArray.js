const removeFromArray = function(inputArray, removeFromArray) {
    let removalArray = Array.from(arguments);
    removalArray = removalArray.slice(1);
    let outputArray = [];
    for (const removes of removalArray) {
        inputArray.filter(function(item) {
            if (item === removes) {
                inputArray.push(inputArray.splice(inputArray.indexOf(removes), 1)[0]);
                inputArray.pop();
                };
            });
        };
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;