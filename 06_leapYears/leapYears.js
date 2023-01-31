const leapYears = function(num) {
    if ((Number.isInteger(num/4) && !Number.isInteger(num/100)) || Number.isInteger(num/400)) {
        return true;
        console.log("This is a leap year!");
    } else {
        return false;
        console.log("Not a leap year")
    } 

};

// Do not edit below this line
module.exports = leapYears;
