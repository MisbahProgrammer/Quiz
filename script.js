// Step 1 define Quiz Data
const quizData = [
    {
        question: "What does html stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyper Transfer Language",
            "Hyperlink and Text Markup Language",
            "Hyper text Machine Language",
        ],
        correct: 0,
    },
    {
        question: "Which CSS property is used to control spacing between elements?",
        options: ["margin","padding","spacing","border-spacing"],
        correct:0,
    },
    {
        question: "Which JavaScript DOM attribute is use to select HTML element by ID?",
        options: ["document.query","getElementById","selectElement","findElementById"],
        correct:1,
    },
    {
        question:"Which React js hook is use to perform side effect in a function component?",
        options:["useState","useEffect","useContext","useReducer"],
        correct:1,
    },
    {
        question:"Which HTML tag is use make an ordered list",
        options:["<ul>","<li>","<ol>","<dl>"],
        correct:2,
    },
];

// step javaScript initializing

let answerBox = document.querySelectorAll('.answer');
let [questionElm , option_1 , option_2 , option_3, option_4] = document.querySelectorAll("#question , #option_1, #option_2,#option_3,#option_4" );
let quiz = document.getElementsByClassName('quiz')[0];
let submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

// Step 3 load the quiz

const  loadQuiz = () => {
    const {question,options} = quizData[currentQuiz];
    questionElm.innerText = question;

    options.forEach(
        (curOpt , index) => (window[`option_${index + 1}`].innerText = curOpt )
        );
};
loadQuiz();
const deselected = () =>{
    answerBox.forEach((curElm) => (curElm.checked = false));
}

const getOption = () =>{
    let ansIndex;
    answerBox.forEach((curoption , index) =>{
        if(curoption.checked){
            ansIndex = index;
        }

    });
    return ansIndex;
}



submitBtn.addEventListener('click', () =>{
    const selectedOption = getOption();
    if(selectedOption === quizData[currentQuiz].correct){
        score = score + 1 ;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        deselected();
        loadQuiz();
    }else{
 // Display the result
 quiz.innerHTML = `
 <div class="result">
     <h2>Your score: ${score}/${quizData.length} correct answers</h2>
     <p>Congratulations on completing the quiz!</p>
     <button class="reload" onclick="location.reload()">Play Again</button>
 </div>
 `;
    }
})