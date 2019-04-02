$(function() {
  console.log( "ready!" );
});

var targetNumber = Math.floor(Math.random() * 120) + 19;
var numberOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, 
  Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];

var scoreCounter = 0;
var wins = 0;
var losses = 0;

$("#numberGuess").text(targetNumber);
$("#currentTotal").text(scoreCounter);

crystalDom();
crystalClick();
function crystalClick() {
  $(".crystal-image").on("click", function() {
    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    scoreCounter += crystalValue;
    winLoss();
  });
}

function crystalDom() {
  $.each(numberOptions, function(index, value) {
    var crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr(
      "src",
      "https://cdn.shopify.com/s/files/1/1061/1924/files/Crystal_Magic_Ball.png?9898922749706957214"
    );
    crystalImage.attr("data-crystalvalue", value);
    $("#crystals").append(crystalImage);
  });
}

function winLoss() {
  $("#currentTotal").text(scoreCounter);
  if (scoreCounter === targetNumber) {
    wins ++;
    $("#wins").text("Wins: " + wins);
    reset();
  } else if (scoreCounter >= targetNumber) {
    losses ++;
    $("#losses").html("Losses: " + losses);
    reset();
  }
}

function reset() {
  numberOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, 
    Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
  $("img").remove();
  crystalDom();
  crystalClick();
  scoreCounter = 0;
  targetNumber = Math.floor(Math.random() * 120) + 19;
  $("#numberGuess").text(targetNumber);
  console.log(targetNumber);
  $("#currentTotal").text(scoreCounter);
  console.log(numberOptions);
  }