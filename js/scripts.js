var cupsToLiters = function() { <!--Cups to Liters-->
  return cups * 0.23658824;
};
var cups = parseInt(prompt("How many cups?"));

alert(cups + " cups equals " + cupsToLiters().toPrecision(4) + "liters.");

var gramsToOunces = function () {<!--Gram to Ounces-->
  return grams * 0.03527396195;
};

var grams = parseInt(prompt("How many grams?"));

alert(grams + " grams equals " + gramsToOunces().toPrecision(3) + " ounces.");
