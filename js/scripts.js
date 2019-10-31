var finalNumber = ""
var numberArray = []


var numberRule = (function(numberInput) {
  // var numberArray = $("#userNumber").val().split("")

  var xRule = (function(numberInput){
    if (numberInput < 10) {
      return numberArray.push("3");
    }
    else {
      return numberArray.push("4");
    }
  });

  var iRule = (function(numberInput) {
    if (numberInput === 1) {
      return "i" ;
    }
    else if (numberInput === 2) {
      return "ii" ;
    }
    else if (numberInput === 3) {
      return "iii" ;
    }
    else if (numberInput === 4) {
      return "iv" ;
    }
    else if (numberInput === 5) {
      return "v" ;
    }
    else if (numberInput === 6) {
      return "vi" ;
    }
    else if (numberInput === 7) {
      return "vii" ;
    }
    else if (numberInput === 8) {
      return "viii" ;
    }
    else if (numberInput === 9) {
      return "ix"
    }
  });



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
