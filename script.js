const quizData = [{
        question: "what is the national fruit of Bangladesh?",
        a: "mango",
        b: " lichi",
        c: "jackfruit",
        d: "banana",
        correct: "c"
    },
    {
        question: "which country is the main enemy of Bangladesh?",
        a: "Japan",
        b: " India",
        c: "Pakistan",
        d: "China",
        correct: "c"
    },
    {
        question: "what is the most used programming Language?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "Ruby",
        correct: "b"
    },
    {
        question: "Who is the current president of USA?",
        a: "Barak Obama",
        b: "Donald Trump",
        c: "Joe biden",
        d: "Prince William",
        correct: "c"
    },
    {
        question: "what is the capital city of France?",
        a: "Paris",
        b: "Dhaka",
        c: "Beijing",
        d: "Washington DC",
        correct: "a"
    },
    {
        question: "Who is the rising richest person right now?",
        a: "Bill Gates",
        b: "Sheikh Hasina",
        c: "Elon Mask",
        d: "Jeff Bajos",
        correct: "c"
    }
]
const quiz = document.getElementById("quiz");
const questionel = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
let correctAns = 0;
let currentQuiz = 0;
let count = 0;
loadQuiz();

function loadQuiz() {
    const quiz = quizData[count];
    questionel.innerText = quiz.question;
    a_text.innerText = quiz.a;
    b_text.innerText = quiz.b;
    c_text.innerText = quiz.c;
    d_text.innerText = quiz.d;
    let corrects = quiz.correct;
    return corrects;
}


let totalpoint = 0;
let choice = "";

function chosenValue() {
    const right = loadQuiz();
    const singleQuiz = document.getElementsByName("answer");
    for (const per of singleQuiz) {
        if (per.checked) {
            choice = per.value;
            break;
        }
    }
    if (right === choice)
        totalpoint++;
    console.log(totalpoint);
    count++;
    if (count < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2> You Scored correctly at ${totalpoint} out of ${quizData.length} questions!! </h2><button onclick="location.reload()">Reload</button>`
    }
}