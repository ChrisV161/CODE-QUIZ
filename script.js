
    var startBtn = document.getElementById("startBtn");
    var time = 75;
    var time_remaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");

    var ansChoiceA = document.getElementById("ansChoiceA");
    var ansChoiceB = document.getElementById("ansChoiceB");
    var ansChoiceC = document.getElementById("ansChoiceC");
    var ansChoiceD = document.getElementById("ansChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";
    var score = 0;
    let i = 0;

var questionSet = [
{
    question: "Question: What is the HTML tag under which you can write the JavaScript code?",
    imageSrc: "",
    ansChoice: ["A) <javascript>", "B) <scripted>", "C) <script>", "D) <js>"],
    correctAnswer: 2
}, 
{
    question: "Question: What are variables used for in JavaScript Programs?",
    imageSrc: "",
    ansChoice: ["A) Storing numbers, dates, or other values", "B) Varying randomly", "D) Causing high-school algebra flashbacks", "D) None of the above"],
    correctAnswer: 0
},
{
    question: "Question: Which method adds a new item to the end of an array and returns the new length?",
    imageSrc: "",
    ansChoice: ["A) shift()", "B) return() ", "C) push() ", "D) pop()"],
    correctAnswer: 2
}, 
{
    question: "Question: Which of the following can't be done with client-side JavaScript?",
    imageSrc: "",
    ansChoice: ["A) Sending a form's contents by email", "B) Validating a form", "C) Storing the form's contents to a database file on the server", "D) None of the above"],
    correctAnswer: 2
},
{
    question: "Question: Which of the following are capabilities of functions in JavaScript?",
    ansChoice: ["A) Return a value", "B) Accept parameters", "C) Accept parameters and Return a value", "D) All of the above"],
    correctAnswer: 1
}];

var countdownTimerInterval = setInterval(setCountdownTimer, 1000);


function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
        }
        document.getElementById("timer").innerHTML = time;
    }


startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});



function setQuizQuestions() {
        questionHeading.textContent = questionSet[i].question;
        ansChoiceA.textContent = questionSet[i].ansChoice[0]; 
        ansChoiceB.textContent = questionSet[i].ansChoice[1]; 
        ansChoiceC.textContent = questionSet[i].ansChoice[2]; 
        ansChoiceD.textContent = questionSet[i].ansChoice[3]; 
        };






ansChoiceA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctAnswer= questionSet[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);
    
        if (0 === correctAnswer) { 
        
            document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
            score++;    
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionSet.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });

ansChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionSet[i].correctAnswer;
    console.log(correctAnswer);
        if (1 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            time_remaining -= 5;
            document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionSet.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });

ansChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionSet[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionSet.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });

ansChoiceD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionSet[i].correctAnswer.value;
    console.log(correctAnswer);
    if (3 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        time_remaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionSet.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});

        function end_quiz(){
            document.getElementById("game_over").style.display= "block";
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("countdownTimer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

            function submit_score() {
             high_scores.push(document.getElementById("initials").value + " " + score);
             view_high_scores();
            }


        
        function view_high_scores(){
        
        // changing the screen output
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("game_over").style.display= "none";
            document.getElementById("high_scores_page").style.display="block";
        
            output="";
            for(let k=0; k<high_scores.length; k++){
                 output = output + "  " + high_scores[k];
            }
            document.getElementById("high_scores").innerHTML= output;                
             clear_up();
        }

        function go_home(){	
                document.getElementById("high_scores_page").style.display= "none";
                document.getElementById("homeContainer").style.display= "block";
                clear_up();
        }
        
        function clear_hs(){
            high_scores = [];
            // high_scores.splice(0, high_scores.length);
          }
        
        function clear_up(){
        
        time=75;
        time_remaining=true;
        time_start=false;
        i=0;
        score=0;
        }