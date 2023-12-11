const questions = [
    {
        question: "What quarterback threw for a record-breaking 55 touchdown passes in the 2013 season?",
        answers: [
            { text: "Tom Brady", correct: false},
            { text: "Aaron Rodgers", correct: false},
            { text: "Phillip Rivers", correct: false},
            { text: "Peyton Manning", correct: true},
        ]
    },
    {
        question: "In 2017, which team relocated from San Diego to Los Angeles?",
        answers: [
            { text: "Rams", correct: false},
            { text: "Chargers", correct: true},
            { text: "49ers", correct: false},
            { text: "Raiders", correct: false},
        ]
    },
    {
        question: "Which quarterback led the NFL in passing yards for five consecutive seasons from 2008 - 2012?",
        answers: [
            { text: "Patrick Mahomes", correct: false},
            { text: "Drew Brees", correct: true},
            { text: "Tom Brady", correct: false},
            { text: "Peyton Manning", correct: false},
        ]
    },
    {
        question: "Who is the all-time leading rusher in NFL history, as of 2022?",
        answers: [
            { text: "Emmitt Smith", correct: true},
            { text: "LaDanian Tomlinson", correct: false},
            { text: "Adrian Peterson", correct: false},
            { text: "Shaun Alexander", correct: false},
        ]
    },
    {
        question: "Which NFL team went 16-0 in the regular season in 2007 but lost in the Super Bowl to the New York Giants?",
        answers: [
            { text: "New England Patriots", correct: true},
            { text: "Green Bay Packers", correct: false},
            { text: "Houston Oilers", correct: false},
            { text: "Kansas City Chiefs", correct: false},
        ]
    },
    {
        question: "Which team won the Super Bowl in the 2002 season, defeating the Oakland Raiders?",
        answers: [
            { text: "Chicago Bears", correct: false},
            { text: "Cleveland Browns", correct: false},
            { text: "Tampa Bay Buccaneers", correct: true},
            { text: "Kansas City Chiefs", correct: false},
        ]
    },
    {
        question: "Who set the NFL single-season sack record with 22.5 sacks in 2011?",
        answers: [
            { text: "Demarcus Ware", correct: false},
            { text: "Jaren Allen", correct: true},
            { text: "JJ Watt", correct: false},
            { text: "Terrell Suggs", correct: false},
        ]
    },
    {
        question: "Which wide receiver had an iconic one-handed catch against the Dallas Cowboys in 2014?",
        answers: [
            { text: "Antonio Brown", correct: false},
            { text: "Odell Beckham Jr", correct: true},
            { text: "Julio Jones", correct: false},
            { text: "Deandre Hopkins", correct: false},
        ]
    },
    {
        question: "Who was the first overall pick in the 2020 NFL Draft?",
        answers: [
            { text: "Justin Herbert", correct: false},
            { text: "Chase Young", correct: false},
            { text: "Joe Burrow", correct: true},
            { text: "Tristin Wirfs", correct: false},
        ]
    },
    {
        question: "In 2008, which quarterback had a perfect passer rating of 158.3 in a playoff game, throwing for 401 yards and 4 touchdowns for the Arizona Cardinals?",
        answers: [
            { text: "Kurt Warner", correct: true},
            { text: "Aaron Rodgers", correct: false},
            { text: "Ben Roethlisberger", correct: false},
            { text: "Carson Palmer", correct: false},
        ]
    },
    {
        question: "Who won the NFL Defensive Player of the Year award in the 2010 season?",
        answers: [
            { text: "Troy Polomalu", correct: true},
            { text: "Ed Reed", correct: false},
            { text: "Ray Lewis", correct: false},
            { text: "BJ Raji", correct: false},
        ]
    },
    {
        question: "Who was named the NFL's Comeback Player of the Year in the 2019 season?",
        answers: [
            { text: "Jordy Nelson", correct: false},
            { text: "Alex Smith", correct: false},
            { text: "Joe Burrow", correct: false},
            { text: "Ryan Tannehill", correct: true},
        ]
    },
    {
        question: "Which team had the most passing touchdowns in the 2018 regular season?",
        answers: [
            { text: "Los Angeles Chargers", correct: false},
            { text: "Kansas City Chiefs", correct: true},
            { text: "Green Bay Packers", correct: false},
            { text: "Cincinnati Bengals", correct: false},
        ]
    },
    {
        question: "Who was the NFL's leader in receiving yards in the 2011 season?",
        answers: [
            { text: "Wes Welker", correct: false},
            { text: "Calvin Johnson", correct: true},
            { text: "Victor Cruz", correct: false},
            { text: "Steve Smith", correct: false},
        ]
    },
    {
        question: "Who was the NFL's leader in total tackles in the 2020 season?",
        answers: [
            { text: "Zach Cunningham", correct: true},
            { text: "Devin White", correct: false},
            { text: "Budda Baker", correct: false},
            { text: "Blake Martinez", correct: false},
        ]
    },
    {
        question: "Who won the NFL Defensive Rookie of the Year award in the 2018 season?",
        answers: [
            { text: "Shaquille Leonard", correct: true},
            { text: "Derwin James", correct: false},
            { text: "Jaire Alexander", correct: false},
            { text: "Myles Garrett", correct: false},
        ]
    },
    {
        question: "Who was the NFL's leader in passing touchdowns in the 2012 season?",
        answers: [
            { text: "Tony Romo", correct: false},
            { text: "Tom Brady", correct: false},
            { text: "Aaron Rodgers", correct: false},
            { text: "Drew Brees", correct: true},
        ]
    },
    {
        question: "Which team had the best red-zone defense in the 2020 season?",
        answers: [
            { text: "Dallas Cowboys", correct: false},
            { text: "San Francisco 49ers", correct: false},
            { text: "Baltimore Ravens", correct: false},
            { text: "New England Patriots", correct: true},
        ]
    },
    {
        question: "Who won the NFL Offensive Rookie of the Year award in the 2014 season?",
        answers: [
            { text: "Odell Beckham Jr", correct: true},
            { text: "Mike Evans", correct: false},
            { text: "Kelvin Benjamin", correct: false},
            { text: "Sammy Watkins", correct: false},
        ]
    },
    {
        question: "Who won Super Bowl LI in the 2016 NFL season?",
        answers: [
            { text: "Atlanta Falcons", correct: false},
            { text: "New England Patriots", correct: true},
            { text: "New York Giants", correct: false},
            { text: "Baltimore Ravens", correct: false},
        ]
    },
    {
        question: "Which team had the most rushing yards in the 2009 regular season?",
        answers: [
            { text: "Carolina Panthers", correct: false},
            { text: "New York Jets", correct: true},
            { text: "New York Giants", correct: false},
            { text: "Baltimore Ravens", correct: false},
        ]
    },
    {
        question: "Which player won the regular season MVP in 2015?",
        answers: [
            { text: "Aaron Rodgers", correct: false},
            { text: "Cam Newton", correct: true},
            { text: "Julio Jones", correct: false},
            { text: "Antonio Brown", correct: false},
        ]
    },
    {
        question: "Who won the NFL Offensive Player of the Year award in the 2016 season?",
        answers: [
            { text: "Tom Brady", correct: false},
            { text: "Antonio Brown", correct: false},
            { text: "Todd Gurley", correct: false},
            { text: "Matt Ryan", correct: true},
        ]
    },
    {
        question: "Who was the NFL's leader in interceptions in the 2014 season?",
        answers: [
            { text: "Patrick Peterson", correct: false},
            { text: "Antonio Cromartie", correct: false},
            { text: "Harrison Smith", correct: false},
            { text: "Glover Quinn", correct: true},
        ]
    },
    {
        question: "Who won the NFL Defensive Rookie of the Year award in the 2022 season?",
        answers: [
            { text: "Sauce Gardner", correct: true},
            { text: "Derek Stingely Jr", correct: false},
            { text: "Aidan Hutchinson", correct: false},
            { text: "Jordan Davis", correct: false},
        ]
    },
    {
        question: "Which team had the highest-scoring offense in the 2011 regular season?",
        answers: [
            { text: "Buffalo Bills", correct: false},
            { text: "Denver Broncos", correct: false},
            { text: "New Orlean Saints", correct: true},
            { text: "Indianapolis Colts", correct: false},
        ]
    },
    {
        question: "Who led the league in rushing touchdowns in the 2016 season?",
        answers: [
            { text: "Ezekial Elliot", correct: false},
            { text: "David Johnson", correct: false},
            { text: "LeGarrette Blount", correct: true},
            { text: "Todd Gurley", correct: false},
        ]
    },
    {
        question: "Who was the NFL's leader in sacks in the 2021 season?",
        answers: [
            { text: "Myles Garrett", correct: false},
            { text: "TJ Watt", correct: true},
            { text: "Nick Bosa", correct: false},
            { text: "Khalil Mack", correct: false},
        ]
    },
    {
        question: "Which wide receiver had the most receiving touchdowns in the 2016 season?",
        answers: [
            { text: "Antonio Brown", correct: false},
            { text: "Jordy Nelson", correct: true},
            { text: "Odell Beckham", correct: false},
            { text: "Devante Adams", correct: false},
        ]
    },
    {
        question: "Who won the NFL Defensive Player of the Year award in the 2017 season?",
        answers: [
            { text: "Bobby Wagner", correct: false},
            { text: "Aaron Donald", correct: true},
            { text: "Cameron Jordan", correct: false},
            { text: "Demarcus Lawrence", correct: false},
        ]
    },
];


//responsible for retrieving elements from the HTML document using their respective IDs and storing references to these elements in variables.
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn"); //start button before quiz initiates
const maxQuestions = 20; // Define the maximum number of questions


let currentQuestionIndex = 0;
let score = 0;


//function to show the start button before the quiz
function showStartButton() {
    startButton.style.display = "block";
    nextButton.style.display = "none";
    questionElement.style.display = "none";
    answerButtons.style.display = "none";
}


//function to have a START QUIZ button before actually displaying the questions and answers
function showQuiz() {
    document.querySelector(".quiz").style.display = "block";
    document.getElementById("start-btn").style.display = "none";
}

//function to randomize an array
function shuffleArray(array) { 
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffleArray(questions);
    showQuestion();
    showQuiz();
    startButton.style.display = "none"; //hides the start button
}

//dispays the questions and answers buttons refering to the CSS sheet
function showQuestion() {
    resetState();
    //added style.display might delete
    questionElement.style.display = "block"; // Display the question element
    answerButtons.style.display = "block"; // Display the answer buttons

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

//Resets the state of the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffleArray(questions);
    showQuestion();
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        selectedBtn.classList.add("shake"); //adds shake animation to wrong answer
        setTimeout(() => {
            selectedBtn.classList.remove("shake"); // Remove shake effect after 0.5s
        }, 500);
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true; //disables the click function until your select "next"
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${maxQuestions}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
};


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length && currentQuestionIndex < maxQuestions) {
        showQuestion();
    } else {
        showScore();
    }
};


startButton.addEventListener("click", () => {
    startQuiz();
    showQuestion(); // Show the first question after clicking the start button
});

nextButton.addEventListener("click", () => {
    if (nextButton.innerHTML === "Play Again") {
        resetQuiz(); // Reset the quiz if "Play Again" is clicked
    } else {
        handleNextButton();
    }
});


showStartButton();
