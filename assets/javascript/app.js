

var countdown = 40;
var rightAnswers = 0;
var wrongAnswers = 0;
var intervalProcess;

// Figure out if you can combine these 3 countdown functions
var countdownDecrement = function(){
	intervalProcess = setInterval(decrement, 1000);
}

var stopDecrement = function(){
	clearInterval(intervalProcess);
}

var decrement = function(){
	countdown--;
	$("#counter").html(countdown);
		if (countdown === 0) {
        stopDecrement();
        factChecker();
      }
}

var factChecker = function(){
	$('input:radio').each(function(){
  		if($(this).is(':checked')) {
  			if ($(this).val() === "true") {
  				rightAnswers++;
  			}
  			else if ($(this).val() === "false"){
  				wrongAnswers++;
  			}
		}
	});
	$("#hideQuestions").hide();
	$(".results").show();
	resultsWindow();
}

$("#finished").on("click", function(){
	stopDecrement();
	factChecker();
});

var resultsWindow = function(){
	$(".results").show();
	$("#rightAnswers").text("Right Answers: " + rightAnswers);
	$("#wrongAnswers").text("Wrong Answers: " + wrongAnswers);
}

$("#startOver").on("click", function(){
	countdown = 40;
	rightAnswers = 0;
	wrongAnswers = 0;
	$(".results").hide();
	$("#hideQuestions").show();
	countdownDecrement();

});

$(document).ready(function() {
	$("#hideQuestions").hide();
	$("#startWindow").show();
	$("#startGame").text("Start Game!");
	$(".results").hide();
	$("#startWindow").on("click", function(){
		$("#hideQuestions").show();
		$("#startWindow").hide();
		countdownDecrement();

	});
});