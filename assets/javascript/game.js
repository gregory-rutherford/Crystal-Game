//target number global
var targetNumber = Math.floor(Math.random() * 120) + 19;
var numberOptions = [1, 3, 7, 12];
var scoreCounter = 0;
console.log(targetNumber);
$("#numberGuess").text(targetNumber);
$("#currentTotal").text(scoreCounter);
$.each(numberOptions, function(index, value) {
    console.log(index, value);
    var crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    crystalImage.attr("data-crystalvalue", value);
    $("#crystals").append(crystalImage);
});

$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    scoreCounter += crystalValue;

    $("#currentTotal").text(scoreCounter);
    if (scoreCounter === targetNumber) {
      alert("You win!");
    }
    else if (scoreCounter >= targetNumber) {
      alert("You lose!!");
    }

  });