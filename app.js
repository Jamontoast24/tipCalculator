function tipCalc0(bill) {
  var percentage = 0;
  var bill = document.getElementById("bill").value;
  tip = bill * percentage;
  return tip;
}

function tipCalc10(bill) {
  var percentage = .1;
  var bill = document.getElementById("bill").value;
  tip = bill * percentage;
  return tip;
}

console.log(tipCalc10(50));

function tipCalc20(bill) {
  var percentage = .2;
  var bill = document.getElementById("bill").value;
  tip = bill * percentage;
  return tip;
}

console.log(tipCalc20(50));

function tipCalc50(bill) {
  var percentage = .5;
  var bill = document.getElementById("bill").value;
  tip = bill * percentage;
  return tip;
}
console.log(tipCalc50(50));

function tipCalc75(bill) {
  var percentage = .75;
  var bill = document.getElementById("bill").value;
  tip = bill * percentage;
  return tip;
}
console.log(tipCalc75(50));

function tipCalc100(bill) {
  var percentage = 1;
  var bill = document.getElementById("bill").value;
  tip = bill * percentage;
  return tip;
}
console.log(tipCalc100(50));

var calcZero = document.getElementById("zero");
var calcTen = document.getElementById("ten");
var calcTwenty = document.getElementById("twenty");
var calcFifty = document.getElementById("fifty");
var calcSeventyFive = document.getElementById("seventyfive");
var calcHundred = document.getElementById("hundred");

calcTen.addEventListener("click", function() {
  result.textContent = "$" + tipCalc10();
});

calcTwenty.addEventListener("click", function() {
  result.textContent = "$" + tipCalc20();
});

calcFifty.addEventListener("click", function() {
  result.textContent = "$" + tipCalc50();
});

calcSeventyFive.addEventListener("click", function() {
  result.textContent = "$" + tipCalc75();
});

calcHundred.addEventListener("click", function() {
  result.textContent = "$" + tipCalc100();
});

calcZero.addEventListener("click", function() {
  result.textContent = "$" + tipCalc0();
});



