var celcius = 25;
var fahrenheit = 70;
var celciusCon = (fahrenheit - 32) * 5/9;
var fahrenheitCon = (celcius * 9/5) + 32;

document.write(celcius+"°C is "+ fahrenheitCon+"°F"+"<br>");
document.write(fahrenheit+"°F is "+ celciusCon+"°C");