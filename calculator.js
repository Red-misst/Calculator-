var calculations = [];
$(".screen").text(calculations);

$("button").on("click", function(event) {
  var currentKey = event.currentTarget.innerHTML;
  if (currentKey == "=") {

    $(".current").text(Math.floor(calculations))
  } else if (currentKey == "AC") {
    calculations = [];
    $(".current").text(calculations.join(" "))
  } else if (currentKey == "R") {
    calculations.pop();
    $(".current").text(calculations.join(" "))
  }
 else if (currentKey== "%") {
  var number = calculations[calculations.length-1]
  console.log(number)
}



  else {
    calculations.push(currentKey)
    $(".current").text(calculations.join(" "))

  }
})

//
// console.log(currentKey)
// calculations.push(Number(currentKey))
// console.log(typeof(calculations[0]))
