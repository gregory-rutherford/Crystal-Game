//target number global
var targetNumber = Math.floor(Math.random() * 120) + 19;
var numberOptions = [1, 3, 7, 12];
var scoreCounter = 0;
var wins = 0;
var losses = 0;

$("#numberGuess").text(targetNumber);
$("#currentTotal").text(scoreCounter);

shuffle(numberOptions);
crystalDom();
crystalClick();

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
console.log(numberOptions);

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
    // console.log(index, value);
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
    alert("You win!");
    wins ++;
    $("#wins").text("Wins: " + wins);
    reset();
  } else if (scoreCounter >= targetNumber) {
    alert("You lose!!");
    losses ++;
    $("#losses").html("Losses: " + losses);
    reset();
  }
}

function reset() {
  shuffle(numberOptions);
  scoreCounter = 0;
  targetNumber = Math.floor(Math.random() * 120) + 19;
  $("#numberGuess").text(targetNumber);
  console.log(targetNumber);
  $("#currentTotal").text(scoreCounter);
}
//reset function
// you need to reset the score counter, pick a new number and assign new values to each crystal
