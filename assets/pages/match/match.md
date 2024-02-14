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
    options: ["less students to teachers", "even ratio", "more students to teachers"]
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
      <input type="radio" id="option${index}" name="question${currentQuestion}" value="${option}">
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
  recommendationList.innerHTML = "";
  answers = [];
  const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
  radioButtons.forEach((radioButton) => {
    answers.push(radioButton.value);
  });

  console.log("User Answers:", answers); // Debugging statement

  // Generate college recommendations based on user answers
  const recommendedColleges = [];

// Logic for selecting colleges based on user preferences
if (answers.includes("City") && answers.includes("Public")) {
  recommendedColleges.push(
    "University of California (UC Santa Barbara)",
    "University of California (UC San Diego)",
    "University of California, Berkeley (UC Berkeley)",
    "Arizona State University (ASU)",
    "San Diego State University (SDSU)"
  );
}

if (answers.includes("Snowy") && answers.includes("Private")) {
  recommendedColleges.push(
    "Harvard University",
    "Princeton University"
  );
}

if (answers.includes("less students to teachers") && answers.includes("Private")) {
  recommendedColleges.push(
    "Harvard University",
    "Princeton University"
  );
}

if (answers.includes("Sunny") && answers.includes("Private")) {
  recommendedColleges.push(
    "Stanford University",
    "Chapman University"
  );
}

if (answers.includes("Mild")) {
  recommendedColleges.push(
    "University of California, Los Angeles (UCLA)",
    "University of Washington",
    "University of Massachusetts Amherst (UMass Amherst)",
    "University of Pittsburgh",
    "University of Texas at Austin (UT Austin)",
    "University of Oregon",
    "San Diego State University (SDSU)"
  );
}

if (answers.includes("STEM")) {
  recommendedColleges.push(
    "University of California, Los Angeles (UCLA)",
    "University of Washington",
    "University of California, Berkeley (UC Berkeley)",
    "Georgia Institute of Technology (Georgia Tech)",
    "University of Massachusetts Amherst (UMass Amherst)"
  );
}

if (answers.includes("Large")) {
  recommendedColleges.push(
    "University of California, Los Angeles (UCLA)",
    "University of Washington",
    "University of California, Berkeley (UC Berkeley)",
    "University of Texas at Austin (UT Austin)",
    "University of Oregon",
    "San Diego State University (SDSU)",
    "University of Minnesota Twin Cities",
    "University of Central Florida (UCF)"
  );
}

if (answers.includes("Medium")) {
  recommendedColleges.push(
    "University of Illinois at Chicago (UIC)",
    "University of Massachusetts Amherst (UMass Amherst)",
    "University of Pittsburgh",
    "Georgia Institute of Technology (Georgia Tech)",
    "Wayne State University",
    "Virginia Commonwealth University (VCU)",
    "Portland State University (PSU)"
  );
}

if (answers.includes("Public") && answers.includes("Large")) {
  recommendedColleges.push(
    "University of California, Los Angeles (UCLA)",
    "University of Washington",
    "University of California, Berkeley (UC Berkeley)",
    "University of Texas at Austin (UT Austin)",
    "University of Oregon",
    "San Diego State University (SDSU)",
    "University of Minnesota Twin Cities",
    "University of Central Florida (UCF)",
    "Arizona State University (ASU)"
  );
}

if (answers.includes("Sunny")) {
  recommendedColleges.push(
    "University of California, Los Angeles (UCLA)",
    "University of California, Berkeley (UC Berkeley)",
    "University of Texas at Austin (UT Austin)",
    "University of California, Santa Barbara (UC Santa Barbara)",
    "San Diego State University (SDSU)"
  );
}

if (answers.includes("High")) {
  recommendedColleges.push(
    "Columbia University",
    "Harvard University",
    "University of Chicago",
    "Johns Hopkins University",
    "Northwestern University",
    "Stanford University",
    "Duke University",
    "Massachusetts Institute of Technology (MIT)",
    "California Institute of Technology (Caltech)",
    "University of Pennsylvania"
  );
}

if (answers.includes("Liberal Arts") && answers.includes("Medium")) {
  recommendedColleges.push(
    "Williams College",
    "Amherst College",
    "Bowdoin College",
    "Swarthmore College",
    "Pomona College",
    "Claremont McKenna College",
    "Middlebury College",
    "Haverford College",
    "Colby College",
    "Bates College"
  );
}

if (answers.includes("more students to teachers") && answers.includes("Small")) {
  recommendedColleges.push(
    "Brown University",
    "Rice University",
    "Cornell University",
    "Dartmouth College",
    "Vanderbilt University",
    "Stanford University",
    "Duke University",
    "Emory University",
    "Georgetown University",
    "University of Rochester"
  );
}

if (answers.includes("Snowy")) {
  recommendedColleges.push(
    "University of Vermont",
    "University of Colorado Boulder",
    "Syracuse University",
    "University of Michigan",
    "University of Minnesota Twin Cities",
    "University of Utah",
    "University of Wisconsin-Madison",
    "Michigan Technological University",
    "University of Massachusetts Amherst (UMass Amherst)",
    "University of Alaska Fairbanks"
  );
}

if (answers.includes("Suburb") && answers.includes("Private")) {
  recommendedColleges.push(
    "Boston College",
    "Villanova University",
    "Wake Forest University",
    "University of Richmond",
    "Pepperdine University",
    "Santa Clara University",
    "University of Notre Dame",
    "Lehigh University",
    "Baylor University",
    "Fordham University"
  );
}

  console.log("Recommended Colleges:", recommendedColleges); // Debugging statement

  // Display recommended colleges
  recommendedColleges.forEach((college) => {
    const collegeElement = document.createElement("li");
    collegeElement.textContent = college;
    recommendationList.appendChild(collegeElement);
  });

  // Show recommendation container
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
