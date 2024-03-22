const convertToCelsius = function(temp) {
  
  Celsius = ((temp - 32) * (5/9));

  if(Celsius%1 === 0)
  {
    return Celsius;
  }
  else
  {
    return parseFloat(Celsius.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {

  Fahrenheit = ((temp * (9/5)) + 32);

  if(Fahrenheit%1 === 0)
  {
    return Fahrenheit;
  }
  else
  {
    return parseFloat(Fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
