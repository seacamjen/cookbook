var cupsToLiters = function(){
  return cups * 0.23658824;
};
var cups = parseInt(prompt("How many cups?"));

alert(cups + " cups equals " + cupsToLiters().toPrecision(4) + "liters.");

var gramsToOunces = function () {
  return grams * 0.03527396195;
};

var grams = parseInt(prompt("How many grams?"));

alert(grams + " grams equals " + gramsToOunces().toPrecision(3) + " ounces.");

var cupsToPints = function() {
  return cups * .5;
};
var cups = parseInt(prompt("How many cups?"));

alert(cups + " cups equal " + cupsToPints().toPrecision(4) + " Pints.");
