// quiz questions
const questionDatabase = {
            easy: [
                { q: "What is 2 + 2?", opts: ["3", "4", "5", "6"], correct: 1, category: "Math" },
                { q: "What color is the sky?", opts: ["Red", "Blue", "Green", "Yellow"], correct: 1, category: "Nature" },
                { q: "How many days in a week?", opts: ["5", "6", "7", "8"], correct: 2, category: "Time" },
                { q: "What is the capital of USA?", opts: ["New York", "Washington DC", "Los Angeles", "Chicago"], correct: 1, category: "Geography" },
                { q: "How many continents are there?", opts: ["5", "6", "7", "8"], correct: 2, category: "Geography" }
            ],
            medium: [
                { q: "What is the capital of France?", opts: ["London", "Berlin", "Paris", "Madrid"], correct: 2, category: "Geography" },
                { q: "Which planet is known as the Red Planet?", opts: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1, category: "Science" },
                { q: "Who painted the Mona Lisa?", opts: ["Van Gogh", "Picasso", "Da Vinci", "Michelangelo"], correct: 2, category: "Art" },
                { q: "What is the largest ocean?", opts: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3, category: "Geography" },
                { q: "In which year did WW2 end?", opts: ["1943", "1944", "1945", "1946"], correct: 2, category: "History" }
            ],
            hard: [
                { q: "What is the speed of light in vacuum?", opts: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "99,792 km/s"], correct: 0, category: "Physics" },
                { q: "What is the atomic number of Gold?", opts: ["47", "79", "92", "118"], correct: 1, category: "Chemistry" },
                { q: "In what year did the Byzantine Empire fall?", opts: ["1453", "1492", "1066", "1215"], correct: 0, category: "History" },
                { q: "Who wrote 'One Hundred Years of Solitude'?", opts: ["Borges", "Garcia Marquez", "Neruda", "Allende"], correct: 1, category: "Literature" },
                { q: "What is the smallest country by area?", opts: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1, category: "Geography" }
            ]
        };


let currentQuestionIndex = 0;
let score =0; 
let streak =0;
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
const answerButtons = document.querySelectorAll('.answer-button');
const getQuestionText = document.querySelector('#question-text');
const nextQuestion = document.querySelector(".next-ques");

// animation star 
document.addEventListener('DOMContentLoaded',()=>{
  // fuction to create stars
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
      // Random size
      const size = Math.random() * (maxSize - minSize) + minSize;
      // Random animation
      const duration =
        Math.random() * (maxDuration - minDuration) + minDuration;
      const delay = Math.random() * 10;

      // apply styles
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



function getRandomQuestion(array){
     for(let i = array.length -1; i>0; i--){
          const text = Math.floor(Math.random()*(i+1));
          [array[i], array[text]] = [array[text], array[i]];
     }
     return array;
}
classic.onclick= function(){
  classic.textContent = "Classic Button";
  // Show quiz section
  getQuiz.classList.remove("hidden");

  // Hide landing page — choose ONE of these two lines:
  getMain.classList.add("hidden");

   const shuffled = getRandomQuestion([...allQuestions]);
   selectedQuestions.push(...shuffled.slice(0,10));
   console.log(selectedQuestions);
    showQuestion();
    // handleAnswer();
    
}
// display question
function showQuestion(){
     let currentQuestion = selectedQuestions[currentQuestionIndex];
    //   getQuestionNumber.textContext = `Question ${currentQuestion + 1} of ${seletedQuestions.length}`;
    getQuestionNumber.textContent= "Question" + " " + (currentQuestionIndex + 1) + " " + "of" + " " + selectedQuestions.length;
        getQuestionText.textContent = currentQuestion.q;

        currentQuestion.opts.forEach((option, i) =>{
            answerButtons[i].textContent = option;
            // console.log(option);

        })
        // getDisplayScore.textContent = score;
        answerButtons.forEach((button, index) => {
          button.addEventListener("click", () => {
            handleAnswer(index);
            console.log("Button clicked:", index);
          });
          button.style.backgroundColor = "";
          button.disabled = false;
        });

}
function handleAnswer(selectedIndex){
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const correctIndex = currentQuestion.correct;
    answerButtons.forEach((btn) => (btn.disabled = true));

    if(selectedIndex === correctIndex){
        score +=10;
        streak = score+10;
        
        answerButtons[selectedIndex].style.backgroundColor = "green";
    } else {
        answerButtons[selectedIndex].style.backgroundColor = "red";
        answerButtons[correctIndex].style.backgroundColor = "green";
    }
    getDisplayScore.textContent = score;
    getDisplayStreak.textContent = streak;
}



 