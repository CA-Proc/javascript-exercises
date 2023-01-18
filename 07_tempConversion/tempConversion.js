const convertToCelsius = function(degreesF) {
  let degreesC = (degreesF - 32) * 5/9;
  return roundToOne(degreesC);
};

const convertToFahrenheit = function(degreesC) {
  let degreesF = ((degreesC * 9/5)+32);
  return roundToOne(degreesF);
};

function roundToOne(number){
  return +(Math.round(number+"e+1") + "e-1");
}



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
