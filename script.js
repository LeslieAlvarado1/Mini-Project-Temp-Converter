"use strict";

function buttonConverter() {

  // This stores the data as a string of text
  //The text of the input will be stored in the variable myNumber and then displayed in the alert
  let myNumber = Number(document.getElementById("myNumber").value);
  const messageError = document.getElementById("messageError");

  //Algorithm calculation

  // Celsius=(Fahrenheit−32)× 5/9
  let result = (myNumber - 32) * (5 / 9);
  //Display it in element, on the screen so we use innerhtml
  document.getElementById("result").innerHTML =
    "<span class='bold-large'>" + result + "</span>";

  if (isNaN(myNumber)) {
    messageError.innerHTML = "One or more of your input values are invalid.";
    return; // exit the function
  }
  // clear any previous error message
  messageError.innerHTML = "";
}
