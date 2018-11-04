
//run for loop through "var questions" and then append questions?

//when user clicks start game--need to display the questions 

//input type="radio" //user can only select one answer

//need to create a count down timer & counter for correct/wrong answers


/////////////////////////////
/////////////////////////////

$("#start").on("click", function(){
    game.start();
})

$(document).on('click', '#end', function(){
    game.done();
})


//varbles
var questions =[{
    question: "What is the largest planet in the solar system?",
    answers: ["Saturn", "Mercury", "Jupiter", "Venus"],
    rightAnswers:"Jupiter"
}, {
    question:"Which sea creature has three hearts?",
    answers: ["Fish", "Shark", "Octopus", "Whale"],
    rightAnswers: "Octopus"
}, {
    question:"What is one quarter of 1,000?",
    answers: ["200", "150", "350", "250"],
    rightAnswers: "250"
}, {
    question:"Which planet shares its name with a dog?",
    answers: ["Earth", "Venus", "Pluto", "Mars"],
    rightAnswers: "Pluto"
}, {
    question:"When did the French Revolution End?",
    answers: ["1780", "1799", "1789", "1798"],
    rightAnswers: "1799"
}, {
    question:"What color is Absynth?",
    answers: ["Red", "Green", "Blue", "Purple"],
    rightAnswers: "Green"
}, {
    question:"In football, where do the Broncos come from?",
    answers: ["Houston", "Denver", "New York", "Cincinnati "],
    rightAnswers: "Denver"
}, {
    question:"Topaz is the birthstone for which month?",
    answers: ["July", "November", "May", "December"],
    rightAnswers: "November"
}];


// var correct: 0;
// var incorrect: 0;
// var counter: 100,

// var timer = function () {
//     counter--;
//     $("#counter").text(counter);

// }

// var startGame = function () {
//     countdown = setInterval(timer, 1000);
//     $("btnwrapper").append("<h2>Time Left: 120</h2>")
// }

//game var and timer 

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    timer: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            // alert("No more time, try again!");
            game.done();
        }
    },

    start: function (){
        time = setInterval(game.timer, 1000)
        $('#btnwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $("#btnwrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var e = 0; e < questions[i].answers.length; e++) {
                $("#btnwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[e] + "'>" + questions[i].answers[e])
            }
        }

        $("#btnwrapper").append('<br><button id="end" style="margin-top: 20px">DONE</button>') 
    },

    done: function () {
        $.each($('input[name="question-0"]:checked'), function() {
            if ($(this).val() === questions[0].rightAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-1"]:checked'), function () {
            if ($(this).val() === questions[1].rightAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-2"]:checked'), function () {
            if ($(this).val() === questions[2].rightAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-3"]:checked'), function () {
            if ($(this).val() === questions[3].rightAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($('input[name="question-4"]:checked'), function () {
            if ($(this).val() === questions[4].rightAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5"]:checked'), function () {
            if ($(this).val() === questions[5].rightAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6"]:checked'), function () {
            if ($(this).val() === questions[6].rightAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7"]:checked'), function () {
            if ($(this).val() === questions[7].rightAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8"]:checked'), function () {
            if ($(this).val() === questions[8].rightAnswers) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function (){
        clearInterval(time);
        $('#btnwrapper h2').remove();

        $('#btnwrapper').html("<h2>All done!</h2>");
        $('#btnwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#btnwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#btnwrapper').append("<h3>Unanswered Questions: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");

    }
}
