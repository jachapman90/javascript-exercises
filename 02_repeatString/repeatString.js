const repeatString = function(string, num) {
    let inputString = string;
    let outputArray = [];
    let outputString;
    if (num >= 0) {
        for (let i = num; i > 0; i--) {
            outputArray.push(string);
        }
         outputString = outputArray.join('');
    } else {outputString = "ERROR";}
    return outputString;   
};

// Do not edit below this line
module.exports = repeatString;
