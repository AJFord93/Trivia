$( document ).ready(function(){



$('.questions').hide();
$('#zelda-logo').fadeToggle(3000);
$('#start-game').fadeToggle(3000);


 $('#start-game').on('click', function(){
    $(this).hide();
  gameStart();
  });


})





var correct = 0;
var incorrect = 0;

function updateScore(){
$('#wins').html('Correct: ' + correct);
$('#losses').html('Incorrect: ' + incorrect);
}

var zelda = [

{ question : 'What is the name of the main character?', 
  choices: ['Link', 'Zedd', 'Navi', 'Gannon'],
  answer : 'Link' },

{ question : 'What is the name of the princess who is held captive in Hyrule?', 
  choices: ['Zelda', 'Bob', 'Peach', 'Belle'],
  answer : 'Zelda' },

{ question : 'What is the name of princess Zelda\'s bodyguard?',
  choices : ['Zora', 'Sheik', 'Majora', 'The Imp'],
  answer : 'Sheik' },

  { question : 'How many rupees does the Deku shield cost?',
  choices : ['100 rupees', '60 rupees', '40 rupees', 'Free'],
  answer : '40 rupees' },

  { question : 'What is the given name of Link\'s horse?',
  choices : ['Xena', 'Eponae', 'Epona', 'Ponyta'],
  answer : 'Epona' }

];

function gameStart() {
  displayQuestion();
  timer();

}


var intervalId;
var number = 10;

function reset(){
   number = 10;
  $('#question').empty();
  clearInterval(intervalId);
  timer();
  newNum();
  displayQuestion();
}

function timer(){
  $('#timer').show();
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;

  $('#timer').html(number);

  if (number === 0){
    incorrect++;
    updateScore();
    

    // checkAnswer();
    // newQuestion();
    reset();

  }
}



  // //what to do for a correct answer
  //        function correct() {
  //           correct++;
  //           clearInterval(intervalId);
  //           $('#timer').html("CORRECT");
  //           $('#question').empty();
            
  //       }
  //       //what to do for an incorrect answer
  //       function incorrect() {
  //           incorrect++;
  //           clearInterval(intervalId);
  //           $('#timer').html("INCORRECT");
  //           $('#question').html("The correct answer was " + answer[num]);

  //         }
var num = Math.floor(Math.random() * 6);

function newNum(){
  num = Math.floor(Math.random() * 6);
}

function displayQuestion() {
  $(".questions").show(300);
  $(".questions").css('width', '10%')



  $("#question").append(zelda[num].question);



  $("#answer1").html(zelda[num].choices[0]);
  $("#answer2").html(zelda[num].choices[1]);
  $("#answer3").html(zelda[num].choices[2]);
  $("#answer4").html(zelda[num].choices[3]);

  var answer = zelda[num].answer;

$('.questions').on('click', function(){
    if($(this).text() == answer){
      correct++;
      alert('Correct!');
      updateScore();
    } else {
      incorrect++;
      alert('incorrect!');
      $('#question').html("The correct answer was " + zelda[num].answer);
      updateScore();
    }
  
});


}



// if ($('.questions').text() == answer) {
//                correct++;
//             clearInterval(intervalId);
//             $('#timer').html("CORRECT");
//             $('#question').empty();
//             } else {
//                 incorrect++;
//             clearInterval(intervalId);
//             $('#timer').html("INCORRECT");
//             $('#question').html("The correct answer was " + answer[num]);
//             }
//         }




       
        


//Game Start (run on click of button)

// function gameStart(){


//   function timerCountdown() {



//     checkAnswer();
//     displayQuestion();

    


//   function newQuestion {
//     displayQuestion();

//     }

  

// function checkAnswer() {

//    }

// function displayQuestion(){

  // }






// How to Access

// zelda[0].question
// zelda[0].choices
// zelda[0].answer

// Start Game
// Timer Countdown
// Display Question
// Answer Question 
// Check if Answer Correct on click any button2
// Highlight Correct Answer ++ -- scoreboard pending choice
// Next Question -- Repeat



































