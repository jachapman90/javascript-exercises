const fibonacci = function(num) {
let a = 1;
let b = 1;
let total = 0;
if (num == 1 || num == 2) {
    return a;
} else if (num == 0) {
    return total;
} else if (num <= 0) {
    return "OOPS";
} else {
    for (let i = 0; i < Number(num) - 2; i++) {
    total = a + b;
    b = a;
    a = total;
}
return total;
}};
// Do not edit below this line
module.exports = fibonacci;
