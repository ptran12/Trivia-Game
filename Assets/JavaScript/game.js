
//run for loop through "var questions" and then append questions?

//when user clicks start game--need to display the questions 

//input type="radio" //user can only select one answer

//need to create a count down timer & counter for correct/wrong answers



//
// alert("TEST");

/////////////////////////////
/////////////////////////////

$("#start").on("click", function(){
    // for(var i=0; i<questions.length;i++) {
    //     $("#btnwrapper").append("<h2>"+ questions[i].question+ "</h2>");
    //     for(var e=0;e<questions[i].answers.length;e++){
    //         $("#btnwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[e]+"'>"+questions[i].answers[e])
    //     }
        
    // }

    game.start();
})


//varbles
var questions =[{
    question: "What is the largest planet in the solar system",
    answers: ["Saturn", "Mercury", "Jupiter", "Venus"],
    correctAnswer:"Jupiter"
}, {
    question:"Which sea creature has three hearts",
    answers: ["Fish", "Shark", "Octopus", "Whale"],
    correctAnswer: "Octopus"
}, {
    question:"What is one quarter of 1,000",
    answers: ["200", "150", "350", "250"],
    correctAnswer: "250"
}, {
    question:"Which planet shares its name with a dog?",
    answers: ["Earth", "Venus", "Pluto", "Mars"],
    correctAnswer: "Pluto"
}, {
    question:"When did the French Revolution End?",
    answers: ["1780", "1799", "1789", "1798"],
    correctAnswer: "1799"
}, {
    question:"What color is Absynth?",
    answers: ["Red", "Green", "Blue", "Purple"],
    correctAnswer: "Green"
}, {
    question:"In football, where do the Bronos come from?",
    answers: ["Houston", "Denver", "New York", "Cincinnati "],
    correctAnswer: "Denver"
}, {
    question:"Topaz is the birthstone for which month?",
    answers: ["July", "November", "May", "December"],
    correctAnswer: "November"
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
    rightAnswers: 0,
    wrongAnswers: 0,
    counter: 120,
    timer: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            alert("No more time, try again!");
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
    },

    check: function(){
        $.each($("input[name='questions-1']:checked"), function (){
            if ($(this).val() == questions[1].correctAnswer) {
                game.rightAnswers++;
            } else {
                game.wrongAnswers++;
            }
        });


        // $.each($('input[name='questions-0']:checked"), function (){
        //     if ($(this).val() == questions[0].correctAnswer) {
        //         game.rightAnswers++;
        //     } else {
        //         game.wrongAnswers++;
        //     }
        // });

        // $.each($("input[name='question - 1']:checked"), function ()){
        //     if ($(this).val() == questions[1].correctAnswer) {
        //         game.rightAnswers++;
        //     } else {
        //         game.wrongAnswers++;
        //     }
        // });

    }
}




    //print game
    // printGame: function (){
    //     clearInterval.(timer):
    //     $('#subwrapper')
    // }
