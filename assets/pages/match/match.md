---
layout: page
title: Find Match
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/common/css/style.css">
    <style>
        /* Custom CSS for quiz page */
        #question-container,
        #button-container,
        #recommendation-container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            overflow: hidden;
        }
      
        /* Additional custom styles if needed */
        #prevButton,
        #nextButton,
        #submitButton {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 0 5px;
            cursor: pointer;
        }

        #prevButton:hover,
        #nextButton:hover,
        #submitButton:hover {
            background-color: #0056b3;
        }
    </style>
    <title>ScholarSearch Quiz</title>
</head>
<body>
<div id="question-container">
  <h2 id="question">Question</h2>
  <div id="options"></div>
</div>
<div id="button-container">
  <button id="prevButton" onclick="prevQuestion()">Previous</button>
  <button id="nextButton" onclick="nextQuestion()">Next</button>
  <button id="submitButton" onclick="submitAnswers()" style="display:none;">Submit</button>
</div>
<div id="recommendation-container" style="display:none;">
  <h3>Recommendation:</h3>
  <ul id="recommendation"></ul>
</div>

<script>
const quizData = [
  {
    question: "Preferred Location",
    options: ["City", "Suburb", "Rural"]
  },
  {
    question: "Weather Preference",
    options: ["Sunny", "Snowy", "Mild"]
  },
  {
    question: "Public or Private Institution Preference",
    options: ["Public", "Private"]
  },
  {
    question: "Population Size Preference",
    options: ["Small", "Medium", "Large"]
  },
  {
    question: "Tuition Preference",
    options: ["Low", "Medium", "High"]
  },
  {
    question: "STEM or Liberal Arts Oriented Preference",
    options: ["STEM", "Liberal Arts"]
  },
  {
    question: "Desired Student to Staff Ratio",
    options: ["Low", "Medium", "High"]
  }
];

let currentQuestion = 0;
let answers = [];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const recommendationContainer = document.getElementById("recommendation-container");
const recommendationList = document.getElementById("recommendation");

function showQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";

  currentQuizData.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.innerHTML = `
      <input type="checkbox" id="option${index}" name="option${index}" value="${option}">
      <label for="option${index}">${option}</label>
    `;
    optionsElement.appendChild(optionElement);
  });

  updateButtons();
}

function prevQuestion() {
  currentQuestion--;
  showQuestion();
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
}

function submitAnswers() {
  answers = [];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      answers.push(checkbox.value);
    }
  });

  // Mock recommendation
  recommendationList.innerHTML = "<li>College A</li><li>College B</li><li>College C</li>";

  recommendationContainer.style.display = "block";
}

function updateButtons() {
  if (currentQuestion === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "inline-block";
  }

  if (currentQuestion === quizData.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
}

showQuestion();
</script>
</body>
</html>