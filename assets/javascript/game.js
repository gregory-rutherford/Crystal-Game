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
      "https://png2.kisspng.com/sh/615c41794299fb4435ffc5f8a7a40683/L0KzQYm3VsMxN5p4gJH0aYP2gLBuTfNzgaR5ed42YXX2hLnslPlke15oiut8dHHvPcL8ggJ1gl46eqUDNEe1SIrsgcdiPl89UKs9NEmzR4K8U8A1OWU9UKoBNEm8PsH1h5==/kisspng-crystal-aesthetics-crystal-quartz-5b3847289ea7a6.8894490715304148886499.png"
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