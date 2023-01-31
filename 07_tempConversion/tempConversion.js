const convertToCelsius = function(temp) {
    let number = (temp - 32) * 0.5556;
    result = number.toFixed(1);
    result = parseFloat(result);
    console.log(`The temperature is ${result} degrees celius`);
    return result;
};  

const convertToFahrenheit = function(temp) {
  let number = (temp * 1.8) + 32;
  result = number.toFixed(1);
  result = parseFloat(result);
  console.log(`The temperature is ${result} degrees Fahrenheit`);
  return result;
};  


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
