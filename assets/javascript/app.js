

var countdown = 40;
var factChecker;
var rightAnswers = 0;
var wrongAnswers = 0;
var intervalProcess;
var resultsWindow;

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

factChecker = function(){
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

resultsWindow = function(){
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








// STUFF THAT DIDNT QUITE WORK:


// FAILED ATTEMPT TO CALL OUTSIDE VAR IN JQUERY SELECTOR- HAD SOME PROGRESS
// 	factChecker = function(){
// 		for (var i = 0; i < 10; i++) {
// 			var radioValue = $("input[name=" 'answerContainer[i]' "]:checked").val();
// 			if (radioValue === "false") {
// 				wrongAnswers++;
// 				console.log(wrongAnswers);
// 			}
// 			else if (radioValue === "true") {
// 				rightAnswers++;
// 				console.log(rightAnswers)
// 			}
// 			console.log(wrongAnswers + " WrOutFor");
// 			console.log(rightAnswers + " RiOutFor");

// 	}
// }

	// $("input[type='radio']").click(function(){
            // var radioValue = $("input[name='Question1']:checked").val();
 //            if (radioValue === "false"){
 //            	wrongAnswers++;
 //            	console.log(wrongAnswers);
 //            }
 //            else if (radioValue === "true"){
 //            	rightAnswers++;
 //            	console.log(rightAnswers);
 //            }
	// });
// }


// factChecker = function(){
// 	for (var i = 0; i < 10; i++) {
		// userAnswer = document.querySelector('input[name=Question'+i+']:checked')||{}).value;
// 		if (userAnswer === "true"){
// 			rightAnswers++
// 		}
// 		else if (userAnswer === "false"){
// 			wrongAnswers++
// 		}




