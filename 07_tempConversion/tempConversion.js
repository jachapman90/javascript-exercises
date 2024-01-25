const convertToCelsius = function(arg1) {
  let degCel = (Math.round(((arg1 - 32) * (5 / 9)) *10) / 10);
  return degCel;
};
//  	x °F ≘ (x − 32) × 5/9 °C 
const convertToFahrenheit = function(arg1) {
  let degFer = (Math.round((arg1 * (9 / 5) + 32) * 10) / 10);
  return degFer;
};
// x °C ≘ (x × 9/5 + 32) °F 
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
