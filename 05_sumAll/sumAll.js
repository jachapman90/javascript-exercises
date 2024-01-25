const sumAll = function(arg1, arg2) {
    let finalOutput = 0;
    let i = arg1;
    let j = arg2;
    if (isNaN(i) || isNaN(j) || i < 0 || j < 0 || typeof i === "string" || 
    typeof j === "string" || Array.isArray(i) || Array.isArray(j)) {
    return "ERROR";
    } else if (arg1 < arg2) {
    while (i <= j) {
        finalOutput = finalOutput + i;
        i++;
    }} else if (arg1 > arg2) {
    while (j <= i) {
        finalOutput = finalOutput + j;
        j++;
    }}
    return finalOutput;
};

// Do not edit below this line
module.exports = sumAll;
