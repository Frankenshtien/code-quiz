var highScores = "";
var timer = 90;
var startButton = document.querySelector("#startButton");
var questions = ["An argument for a function goes where?", "JavaScript is not a low level language.", "The condition for and if/else statement goes between what symbols?", "What type of language is JavaScript?", "JavaScript cannot run outside of the browser."  
];
var answers = [
    ["a) before the parentheses", "b) inside the parentheses", "c) after the parentheses", "inside the curly braces"],
    ["a) true", "b) false"],
    ["a) parentheses", "b) quotation marks", "c) square braces", "d) curly braces"],
    ["a) programming language", "b) script language", "c) ECMA language", "d) all of the above"],
    ["a) true", "b) false"]
];

var content = document.querySelector("#content-area");
var answers = document.querySelector("#answers");

var startQuiz = function() {
    var info = document.createElement("h2");
    info.textContent = "Coding Quiz";
    var realInfo = document.createElement("p");
    realInfo.textContent = "Try to get through the next five questions a quickly as possible to get the high score!";
    var start = document.createElement("button");
    start.className = "startButton";
    start.textContent = "Start Quiz";
    content.appendChild(info);
    content.appendChild(realInfo);
    content.appendChild(start);
};

var startButtonHandler = function(event) {
    var targetElement = event.target;
    if (targetElement.matches(".startButton")) {
        console.log("it worked!");
    }
}

startQuiz();

content.addEventListener("click", startButtonHandler);
