var finalNumber = ""
var numberArray = []


var numberRule = (function(numberInput) {
  // var numberArray = $("#userNumber").val().split("")

  console.log("numberInput is: ",numberInput);

  numberString = numberInput.toString();

  lastNumber = numberString.slice(-1);
  console.log("lastNumber is: ",lastNumber);
  lastTwoNumber = parseInt(numberString.slice(-2));
  console.log("lastTwoNumber is: ",lastTwoNumber);

  var iRule = (function(numberInput) {
    if (lastNumber === "1") {
      return numberArray.push("i") ;
    }
    else if (lastNumber === "2") {
      return numberArray.push("ii") ;
    }
    else if (lastNumber === "3") {
      return numberArray.push("iii") ;
    }
    else if (lastNumber === "4") {
      return numberArray.push("iv") ;
    }
    else if (lastNumber === "5") {
      return numberArray.push("v") ;
    }
    else if (lastNumber === "6") {
      return numberArray.push("vi") ;
    }
    else if (lastNumber === "7") {
      return numberArray.push("vii") ;
    }
    else if (lastNumber === "8") {
      return numberArray.push("viii") ;
    }
    else if (lastNumber === "9") {
      return numberArray.push("ix");
    }
    else {
      return;
    }
  });

  var xRule = (function(numberInput){
    if (numberInput < 10) {
      return;
    }
    else if (lastTwoNumber < 20) {
      return numberArray.unshift("X");
    }
    else if (lastTwoNumber < 30) {
      return numberArray.unshift("XX");
    }
    else if (lastTwoNumber < 40) {
      return numberArray.unshift("XXX");
    }
    else if (lastTwoNumber < 60) {
      return;
    }
    else if (lastTwoNumber < 90) {
      return numberArray.unshift("XXX");
    }
    else {
      return;
    }

  });

  var lRule = (function(numberInput){
    if (lastTwoNumber < 40) {
      return;
    }
    else if (lastTwoNumber < 50) {
      return numberArray.unshift("XL");
    }
    else if (lastTwoNumber < 90) {
      return numberArray.unshift("L");
    }
    else {

    }
  });


  var cRule = (function(numberInput){
    if (numberInput < 90) {
      return;
    }
    else if (numberInput < 100) {
      return numberArray.unshift("XC");
    }
    else if (numberInput < 190) {
      return numberArray.unshift("CXC");
    }
    else if (numberInput < 300) {
      return numberArray.unshift("CC");
    }
    else if (numberInput < 400) {
      return numberArray.unshift("CCC");
    }
    else {
      return numberArray.unshift("Check");
    }
  });




  console.log("iRule is: ",iRule(numberInput));

  console.log("xRule is: ",xRule(numberInput));

  console.log("cRule is: ",lRule(numberInput));

  console.log("cRule is: ",cRule(numberInput));

  console.log("numberArray is: ",numberArray);



});



$(document).ready(function() {
  $("#specs").submit(function(event) {
    event.preventDefault();

    var numberInput = parseInt($("#userNumber").val());
    var numberOutput = numberRule(numberInput);
    $("#result").text(numberOutput);
  });
});
