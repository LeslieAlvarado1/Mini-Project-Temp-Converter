"use strict";

function buttonConverter() {
  //The text of the input will be stored in the variable myNumber and then displayed in the alert
  let myNumber = Number(document.getElementById("myNumber").value);

  // Celsius=(Fahrenheit−32)× 5/9
  let result = ((myNumber - 32) * (5 / 9)).toFixed(2);

  displayData(result);

  //if (isNaN(myNumber)) {
  // messageError.innerHTML = "One or more of your input values are invalid.";
  // return; // exit the function   }
  // clear any previous error message
  //messageError.innerHTML = "";
}

function buttonConverter2() {
  // The text of the input will be stored in the variable myNumber and then displayed in the alert
  let myNumber = Number(document.getElementById("myNumber").value);

  // Fahrenheit=(Celsius * 9/5) +32
  let result = ((myNumber * 9 / 5) + 32).toFixed(2);
  displayData(result);
}

function displayData(_result) {
  //Display it in element, on the screen so we use innerhtml
  document.getElementById("result").innerHTML =
    "<h1><span class='bold-large'>" + _result + "</h1></span>";
}
