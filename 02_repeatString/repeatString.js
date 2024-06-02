const repeatString = function(str, count) {
    if (count < 0) {
        return "ERROR";
    }
    let newString = str.repeat(count);
    // console.log(newString)
    return newString;
};

repeatString("hey", -1)
// Do not edit below this line
module.exports = repeatString;
