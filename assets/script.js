var startButton = document.getElementById("startBtn")
var nextButton = document.getElementById("nextBtn")
var questionElement = document.getElementById("question")
var answerButtons = document.getElementById("answerButtons")
var shuffledQuestions 
var currentQuestionIndex
var correctOrNot = document.getElementById("correctOrNot")
var finishButton = document.getElementById("finishBtn")
var highScores = document.getElementById("highScores")
var time = document.getElementById("timer")
var countDown = 90

var questions = [
    {
        question: "An argument for a function goes where?",
        answers: [
            {text: "a) before the parentheses", correct: false},
            {text: "b) inside the parentheses", correct: true},
            {text: "c) after the parentheses", correct: false},
            {text: "d) inside the curly braces", correct: false}
        ]
    },
    {
        question: "JavaScript is not a low level language.",
        answers: [
            {text: "a) true", correct: true},
            {text: "b) false", correct: false}
        ]
    },
    {
        question: "The condition for and if/else statement goes between what symbols?",
        answers: [
            {text: "a) parentheses", correct: true},
            {text: "b) quotation marks", correct: false},
            {text: "c) square braces", correct: false},
            {text: "d) curly braces", correct: false}
        ]
    },
    {
        question: "What type of language is JavaScript?",
        answers: [
            {text: "a) programming language", correct: false},
            {text: "b) script language", correct: false},
            {text: "c) ECMA language", correct: false},
            {text: "d) all of the above", correct: true}
        ]
    },
    {
        question: "JavaScript cannot run outside of the browser.",
        answers: [
            {text: "a) true", correct: false},
            {text: "b) false", correct: true}
        ]
    }
]

var timer = function() {
    setInterval(function() {
    time.textContent = "time:" + countDown
    countDown--
    }, 1000);
    setNextQuestion()
}

var startGame = function() {
    startButton.classList.add("hide");
    answerButtons.classList.remove("hide")
    questionElement.textContent = "";
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    timer()

}

var setNextQuestion = function() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

var showQuestion = function(question) {
    questionElement.textContent = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button)
    })
}

var resetState = function() {
    nextButton.classList.add("hide")
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

var selectAnswer = function(event) {
    var selectedButton = event.target
    var correct = selectedButton.dataset.correct
    if (correct === "true") {
        correctOrNot.classList.remove("hide")
        correctOrNot.textContent = "correct!"
        correctOrNot.classList.add("correct")
    }
    else {
        correctOrNot.classList.remove("hide")
        correctOrNot.textContent = "incorrect!"
        correctOrNot.classList.add("incorrect")
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide") 
        nextButton.addEventListener("click", clearStatus)
    }
    else {
        finishButton.classList.remove("hide")
        finishButton.addEventListener("click", highScores)
    }
}

var highScores = function() {
    clearInterval(timer)
    var initials = window.prompt("You have finished the quiz! Enter your initials to save your score.")
    localStorage.setItem("initials", initials)
    localStorage.setItem("score", countDown)
}


var clearStatus = function() {
    correctOrNot.classList.add("hide")
    correctOrNot.classList.remove("correct")
    correctOrNot.classList.remove("incorrect")
    currentQuestionIndex++
    setNextQuestion()
}


startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", clearStatus);
highScores.addEventListener("click", );
countDown.addEventListener()