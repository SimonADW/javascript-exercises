const sumAll = function(num1, num2) {
    let sum = 0
    if (num2 > num1) {
        for (let i = num2; i >= num1; i-- ) {
        sum += i;
        }
    } else {
        for (let i = num1; i >= num2; i-- ) {    
        sum += i;
        }
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
