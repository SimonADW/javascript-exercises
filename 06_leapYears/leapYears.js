const leapYears = function(num) {
    if ((Number.isInteger(num/4) && !Number.isInteger(num/100)) || Number.isInteger(num/400)) {
        console.log("This is a leap year!");
        return true;
       
    } else {
        console.log("Not a leap year")
        return false;
    } 

};

// Do not edit below this line
module.exports = leapYears;
