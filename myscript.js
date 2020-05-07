const question = document.getElementById("question");
const options = Array.from (document.getElementsByClassName("option-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let optionA = document.getElementById("option-A");
let optionB = document.getElementById("option-B");
let optionC = document.getElementById("option-C");
let optionD = document.getElementById("option-D");

let questions = [
    {
        question: "Which of these countries was never colonized?",
        option1: "Britain",
        option2: "USA",
        option3: "Ethiopia",
        option4: "Egypt", 
        answer: 3
    },
    {
        question: "Which of these languages has the highest number of native speakers in the world?",
        option1: "Spanish",
        option2: "English",
        option3: "French",
        option4: "Spanish",
        answer: 1
    },
    {
        question: "Fucking is found in which of the following countries?",
        option1: "Ireland",
        option2: "Russia",
        option3: "Vietnam",
        option4: "Austria",
        answer: 4
    },
    {
        question: "Which of these countries produced the first democratically elected female president?",
        option1: "Liberia",
        option2: "Malta",
        option3: "Iceland",
        option4: "Philippines",
        answer: 3
    },
    {
        question: "Which of these countries have the highest number of muslim population?",
        option1: "Indonesia",
        option2: "India",
        option3: "Pakistan",
        option4: "Egypt",
        answer: 1
    },
    {
      question: "Mount Kilimanjaro is found in which east African nation?",
      option1: "Kenya",
      option2: "Rwanda",
      option3: "Tanzania",
      option4: "Burundi", 
      answer: 3
    },
    {
      question: "Which of these African nations has never experienced a military coup d'etat?",
      option1: "Botswana",
      option2: "Guinea",
      option3: "Algeria",
      option4: "Madagascar",
      answer: 1
    },
    {
      question: "Istanbul is found on which continent(s)?",
      option1: "Asia",
      option2: "Europe",
      option3: "Asia and Europe",
      option4: "Turkey",
      answer: 3
    },
    {
      question: "The Persian Civilization occured in which present day country?",
      option1: "Peru",
      option2: "Egypt",
      option3: "Iran",
      option4: "Italy",
      answer: 3
    },
    {
      question: "What is the capital of Nigeria?",
      option1: "FCT",
      option2: "Lagos",
      option3: "Abuja",
      option4: "Calabar",
      answer: 3
    }
];

const SCORE_POINT = 2;
const MAX_QUESTIONS = 10;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      localStorage.setItem("mostRecentScore", score);  
      return window.location.assign("end.html");
    }
    questionCounter++;
    questionCounterText.innerText =`${questionCounter}/${MAX_QUESTIONS}`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    options.forEach((option) => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion["option" + number];
    }
    );
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

options.forEach( option => {
    option.addEventListener('click', e => { 
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = e.target;
        const choiceAnswer = selectedOption.dataset['number'];

    //     const classToApply = "incorrect";
    //  if (choiceAnswer == currentQuestion.answer) {
    //       classToApply = "correct";
    //       console.log(classToApply);
    //   }
      const classToApply = 
      choiceAnswer == currentQuestion.answer ? "correct" : "incorrect"; 

      if(classToApply === "correct") {
        increaseScore(SCORE_POINT);
        selectedOption.parentElement.classList.add(classToApply);
      } else {
        selectedOption.parentElement.classList.add(classToApply);
      

      if (currentQuestion.answer === 1) {
        optionA.classList.add("correct");
      } else if (currentQuestion.answer === 2) {
        optionB.classList.add("correct");
      } else if (currentQuestion.answer === 3) {
        optionC.classList.add("correct");
      } else if (currentQuestion.answer === 4) {
        optionD.classList.add("correct");
      }
      }
    
      
       selectedOption.parentElement.classList.add(classToApply);
        setTimeout (() => {
            optionA.classList.remove("correct");
            optionB.classList.remove("correct");
            optionC.classList.remove("correct");
            optionD.classList.remove("correct");
            selectedOption.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 800);     
      console.log(classToApply); 
    })
}
);
increaseScore = num => {
    score +=num;
    scoreText.innerText = score;
}
 



startQuiz();

