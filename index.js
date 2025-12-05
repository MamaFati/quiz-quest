// quiz questions
const questionDatabase = {
  easy: [
    {
      q: "What is 2 + 2?",
      opts: ["3", "4", "5", "6"],
      correct: 1,
      category: "Math",
    },
    {
      q: "What color is the sky?",
      opts: ["Red", "Blue", "Green", "Yellow"],
      correct: 1,
      category: "Nature",
    },
    {
      q: "How many days in a week?",
      opts: ["5", "6", "7", "8"],
      correct: 2,
      category: "Time",
    },
    {
      q: "What is the capital of USA?",
      opts: ["New York", "Washington DC", "Los Angeles", "Chicago"],
      correct: 1,
      category: "Geography",
    },
    {
      q: "How many continents are there?",
      opts: ["5", "6", "7", "8"],
      correct: 2,
      category: "Geography",
    },
    {
      q: "How many legs does a spider have?",
      opts: ["6", "8", "10", "12"],
      correct: 1,
      category: "Animals",
    },
    {
      q: "Which planet do we live on?",
      opts: ["Mars", "Earth", "Venus", "Jupiter"],
      correct: 1,
      category: "Science",
    },
    {
      q: "What do bees make?",
      opts: ["Milk", "Honey", "Water", "Juice"],
      correct: 1,
      category: "Nature",
    },
    {
      q: "What shape has 3 sides?",
      opts: ["Square", "Triangle", "Circle", "Hexagon"],
      correct: 1,
      category: "Math",
    },
    {
      q: "What is H2O commonly known as?",
      opts: ["Fire", "Salt", "Water", "Air"],
      correct: 2,
      category: "Science",
    },
  ],
  medium: [
    {
      q: "What is the capital of France?",
      opts: ["London", "Berlin", "Paris", "Madrid"],
      correct: 2,
      category: "Geography",
    },
    {
      q: "Which planet is known as the Red Planet?",
      opts: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 1,
      category: "Science",
    },
    {
      q: "Who painted the Mona Lisa?",
      opts: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"],
      correct: 2,
      category: "Art",
    },
    {
      q: "What is the largest ocean?",
      opts: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3,
      category: "Geography",
    },
    {
      q: "In which year did WW2 end?",
      opts: ["1943", "1944", "1945", "1946"],
      correct: 2,
      category: "History",
    },
    {
      q: "Which gas do plants absorb from the atmosphere?",
      opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
      correct: 2,
      category: "Science",
    },
    {
      q: "Who invented the telephone?",
      opts: ["Edison", "Bell", "Tesla", "Newton"],
      correct: 1,
      category: "History",
    },
    {
      q: "Which continent is the Sahara Desert located on?",
      opts: ["Asia", "Africa", "Australia", "South America"],
      correct: 1,
      category: "Geography",
    },
    {
      q: "Which language is the most spoken worldwide?",
      opts: ["English", "Spanish", "Mandarin", "Hindi"],
      correct: 2,
      category: "Culture",
    },
    {
      q: "What is the boiling point of water?",
      opts: ["100°C", "90°C", "80°C", "110°C"],
      correct: 0,
      category: "Science",
    },
  ],
  hard: [
    {
      q: "What is the speed of light in vacuum?",
      opts: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "99,792 km/s"],
      correct: 0,
      category: "Physics",
    },
    {
      q: "What is the atomic number of Gold?",
      opts: ["47", "79", "92", "118"],
      correct: 1,
      category: "Chemistry",
    },
    {
      q: "In what year did the Byzantine Empire fall?",
      opts: ["1453", "1492", "1066", "1215"],
      correct: 0,
      category: "History",
    },
    {
      q: "Who wrote 'One Hundred Years of Solitude'?",
      opts: ["Borges", "Garcia Marquez", "Neruda", "Allende"],
      correct: 1,
      category: "Literature",
    },
    {
      q: "What is the smallest country by area?",
      opts: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      correct: 1,
      category: "Geography",
    },
    {
      q: "What is the powerhouse of the cell?",
      opts: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
      correct: 2,
      category: "Biology",
    },
    {
      q: "Who formulated the laws of planetary motion?",
      opts: ["Kepler", "Newton", "Galileo", "Einstein"],
      correct: 0,
      category: "Astronomy",
    },
    {
      q: "What is the capital of Iceland?",
      opts: ["Oslo", "Helsinki", "Reykjavik", "Copenhagen"],
      correct: 2,
      category: "Geography",
    },
    {
      q: "What is the chemical formula for table salt?",
      opts: ["CO2", "HCl", "NaCl", "KCl"],
      correct: 2,
      category: "Chemistry",
    },
    {
      q: "Which ancient empire built Machu Picchu?",
      opts: ["Mayan", "Aztec", "Incan", "Roman"],
      correct: 2,
      category: "History",
    },
  ],
};
//**** questions database *****//


// ***** Global variables ***//
let currentQuestionIndex = 0;
let score =0; 
let streak =0;
let timeLeft = 15;
let timerInterval = null;
let health = 100;
const selectedQuestions=[]
const allQuestions = [
     ...questionDatabase.easy ,
     ...questionDatabase.medium,
     ...questionDatabase.hard
]
let classic = document.getElementById("classic");
let getQuiz = document.querySelector(".display-quiz");
let getMain = document.querySelector(".main-display");
let getDisplayScore = document.querySelector('.display-score');
let getDisplayStreak = document.querySelector(".display-streak");
let getQuestionNumber =document.querySelector('.question-number');
const mainDisplay = document.querySelector(".main-display");
const displayQuiz = document.querySelector(".display-quiz");
const answerButtons = document.querySelectorAll('.answer-button');
const getQuestionText = document.querySelector('#question-text');
const nextQuestion = document.querySelector(".next-ques");
const lifeLine5050 =document.querySelectorAll('.quiz-life')[0];
const lifeLineAddTime = document.querySelectorAll(".quiz-life")[1];
const lifeLineSkip = document.querySelectorAll(".quiz-life")[2];
const finalScreen = document.querySelector(".final-score");
const scoreValue = document.querySelector(".final-score-value");

//**** Star Animation  ****// 
document.addEventListener('DOMContentLoaded',()=>{
  function createStar(
    layerClass,
    count,
    minSize,
    maxSize,
    minDuration,
    maxDuration
  ) {
    const main = document.querySelector(layerClass);
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      const x = Math.random() * 150;
      const y = Math.random() * 150;
      const size = Math.random() * (maxSize - minSize) + minSize;
      const duration =
        Math.random() * (maxDuration - minDuration) + minDuration;
      const delay = Math.random() * 10;

      star.style.left = x + "vw";
      star.style.top = y + "vh";
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.animationDuration = duration + "s";
      star.style.animationDelay = delay + "s";

      main.appendChild(star);
    }
   
  }
   createStar(".stars-slow", 100, 1, 3, 20, 40);
   createStar(".stars-medium", 95, 2, 4, 15, 50);
   createStar(".stars-fast", 70, 3, 5, 10, 90);
})

//**** streack fire ****/ 

function updateComboFire() {
  const fire = document.querySelector(".combo-fire");

  if (streak >= 3) {
    fire.style.display = "block";
  } else {
    fire.style.display = "none";
  }
}

//***** Chane Screens *****//
function switchScreen(oldScreen, newScreen) {
  oldScreen.classList.remove("active");
  oldScreen.classList.add("exit");

  setTimeout(() => {
    oldScreen.classList.add("hidden");
    oldScreen.classList.remove("exit");

    newScreen.classList.remove("hidden");
    setTimeout(() => {
      newScreen.classList.add("active");
    }, 10);
  }, 10); 
}

//**** Animated lighting */ 
function triggerLightning() {
  const lightning = document.querySelector(".lightning-effect");
  lightning.innerHTML = "";  

  const flash = document.createElement("div");
  flash.classList.add("lightning-flash");

  lightning.appendChild(flash);

  setTimeout(() => flash.remove(), 400);
}

//***** Generate questions randomly */ 
function getRandomQuestion(array){
     for(let i = array.length -1; i>0; i--){
          const text = Math.floor(Math.random()*(i+1));
          [array[i], array[text]] = [array[text], array[i]];
     }
     return array;
}

//***** Logic for click classic button *****/
classic.onclick= function(){
   const shuffled = getRandomQuestion([...allQuestions]);
   selectedQuestions.push(...shuffled.slice(0,10));
    switchScreen(mainDisplay, displayQuiz);
    showQuestion();
    
    
}
//**** Display Questions */
function showQuestion() {
  if (!selectedQuestions[currentQuestionIndex]) {
    console.log("No question found, ending quiz.");
    endQuiz();
    return;
  }

  answerButtons.forEach((btn) => {
    btn.style.visibility = "visible";
    btn.classList.remove("correct", "wrong");
  });

  let currentQuestion = selectedQuestions[currentQuestionIndex];

  getQuestionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${
    selectedQuestions.length
  }`;

  getQuestionText.textContent = currentQuestion.q;

  const labels = ["A", "B", "C", "D"];

  currentQuestion.opts.forEach((option, i) => {
    const label = answerButtons[i].querySelector(".answer-label");
    const text = answerButtons[i].querySelector(".answer-text");
    label.textContent = labels[i];
    text.textContent = option;
  });

  answerButtons.forEach((button, index) => {
    button.onclick = () => handleAnswer(index);
    button.disabled = false;
  });
  nextQuestion.style.display = "none";
  startTimer();
}
 
//***** Timer function *****/ 
function startTimer(){
   clearInterval(timerInterval);
  timeLeft = 15;
  updateTimerDisplay();
   
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleAnswer(-1);  
    }
  }, 1000);
}
//***** Update Timer function *****/
function updateTimerDisplay() {
  const timerText = document.querySelector(".timer-text");
  const timerCircle = document.querySelector(".timer");

  timerText.textContent = timeLeft;
 
  const percent = ((15 - timeLeft) / 15) * 100;
  timerCircle.style.setProperty("--progress", percent + "%");

   
  if (timeLeft <= 5) {
    timerText.style.color = "#f87171";
  } else {
    timerText.style.color = "white";
  }
  if(timeLeft === 0){
    clearInterval(timerInterval);
    setTimeout(() => {
      currentQuestionIndex++;

      if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();  
      } else {
        endQuiz();
      }
      answerButtons.forEach((btn) => btn.classList.remove("correct", "wrong"));
    }, 1000);
  }
}

//*****   *****/
function handleAnswer(selectedIndex){
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const correctIndex = currentQuestion.correct;
    answerButtons.forEach((btn) => (btn.disabled = true));

    if (selectedIndex === correctIndex) {
      score += 10;
      streak++;
      answerButtons.forEach((btn) => btn.classList.remove("correct", "wrong"));
       answerButtons[selectedIndex].classList.add("correct");
      triggerLightning();  
    } else {
      streak = 0;
      answerButtons.forEach((btn) => btn.classList.remove("correct", "wrong"));
      if (selectedIndex >= 0) {
         
         answerButtons[selectedIndex].classList.add("wrong");
      }
      answerButtons[correctIndex].classList.add("correct");
    }

    getDisplayScore.textContent = score;
    getDisplayStreak.textContent = streak;
    updateComboFire();

    const progressPercent = ((currentQuestionIndex+1)/selectedQuestions.length)*100;
    document.querySelector(".progress-fill").style.width =
      progressPercent + "%";

    nextQuestion.style.display = "inline";
}

//*****  *****/
nextQuestion.onclick=()=>{
  clearInterval(timerInterval);

  currentQuestionIndex++;
  answerButtons.forEach((btn) => btn.classList.remove("correct", "wrong"));

  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    showFinalScore();

  }
}

//***** Timer function *****/
function endQuiz() {
  clearInterval(timerInterval);
  scoreValue.textContent = score;

  document.querySelector(".display-quiz").classList.add("hidden");
  finalScreen.classList.remove("hidden");
}

function playAgain() {
 clearInterval(timerInterval);

 score = 0;
 streak = 0;
 currentQuestionIndex = 0;
 selectedQuestions.length = 0;

 document.querySelector(".progress-fill").style.width = "0%";
 document.querySelector(".display-score").textContent = 0;
 document.querySelector(".display-streak").textContent = 0;
  //  let currentQuestion = selectedQuestions[currentQuestionIndex];

   
    // getQuestionText.textContent = currentQuestion.q;

  // RESET LIFELINES
  used5050 = false;
  usedAddTime = false;
  usedSkip = false;

  // Reset lifeline button styles
  const lifelines = document.querySelectorAll(".quiz-life");
  lifelines.forEach((l) => {
    l.style.opacity = "1";
    l.style.pointerEvents = "auto";
  });
  // PICK NEW RANDOM QUESTIONS
  const shuffled = getRandomQuestion([...allQuestions]);
  selectedQuestions.push(...shuffled.slice(0, 10));

  getQuestionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${
    selectedQuestions.length
  }`;
  console.log("go again")
  // START THE QUIZ AGAIN
  switchScreen(finalScreen, displayQuiz);
}

//*****  *******/ 
function showFinalScore() {
  clearInterval(timerInterval);

  switchScreen(displayQuiz, finalScreen);
  scoreValue.textContent = score;
  document.querySelector(".final-streak-value").textContent = streak;

  // Accuracy
  const accuracy = Math.round((score / selectedQuestions.length) * 100);
  document.querySelector(
    ".accuracy"
  ).textContent = accuracy + "%";
}

//*****  *******/ 
function showMainManu() {
  clearInterval(timerInterval);

  
  score = 0;
  streak = 0;
  currentQuestionIndex = 0;
  selectedQuestions.length = 0;

  document.querySelector(".progress-fill").style.width = "0%";
  document.querySelector(".display-score").textContent = 0;
  document.querySelector(".display-streak").textContent = 0;

  switchScreen(finalScreen, mainDisplay);
}
// ******  ****/
function displayProfile(){
  alert(`📊Profile stats

    🎮 Level: 1
    ✨ Total XP: 1202
    🏆 High Score: 72
    🔥 Best Sreak: ${streak}
    📈 Game Played: 8
    ✅ Total Correct: 45
    ❓ Total Questions: 10
    🎯 Overall Accuracy: 90%
    🏅 Achievement: 6/8

    `)
}

 let used5050 = false;

 lifeLine5050.onclick = () => {
   if (used5050) return; // prevent reuse
   used5050 = true;

   const currentQuestion = selectedQuestions[currentQuestionIndex];
   const correctIndex = currentQuestion.correct;

   // collect wrong answers
   let wrongIndexes = [];
   answerButtons.forEach((btn, index) => {
     if (index !== correctIndex) wrongIndexes.push(index);
   });

   // remove 2 random wrong answers
   wrongIndexes.sort(() => Math.random() - 0.5);
   const removeTwo = wrongIndexes.slice(0, 2);

   removeTwo.forEach((index) => {
     answerButtons[index].style.visibility = "hidden";
   });

   lifeLine5050.style.opacity = 0.5;
   lifeLine5050.style.pointerEvents = "none";
 };

 let usedAddTime = false;

 lifeLineAddTime.onclick = () => {
   if (usedAddTime) return;
   usedAddTime = true;

   timeLeft += 10; // add extra seconds
   updateTimerDisplay(); // refresh UI

   // disable button
   lifeLineAddTime.style.opacity = 0.5;
   lifeLineAddTime.style.pointerEvents = "none";
 };
 let usedSkip = false;

 lifeLineSkip.onclick = () => {
   if (usedSkip) return;
   usedSkip = true;

   clearInterval(timerInterval);

   currentQuestionIndex++;

   if (currentQuestionIndex < selectedQuestions.length) {
     showQuestion();
   } else {
     endQuiz();
   }

   lifeLineSkip.style.opacity = 0.5;
   lifeLineSkip.style.pointerEvents = "none";
 };
