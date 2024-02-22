const palindromes = function (str) {
    let string = str.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'", -.<>\{\}\[\]\\\/]/gi, '');
   let reversed = string.split('').reverse().join(''); 
   console.log(reversed);
    if (string === reversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
