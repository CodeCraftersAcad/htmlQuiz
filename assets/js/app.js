const quizBody = document.querySelector("#quiz-body");
let points = 0;
let chosenAnswer;
let questions = [];
// change questions depending on which html doc is displayed
if (window.location.pathname.includes("htmlQuiz")) {
    questions = htmlQuestions
} else if (window.location.pathname.includes("cssQuiz")) {
    questions = cssQuestions
}

// loops thru answer classes
document.addEventListener("click", e => {
    if (e.target.classList.contains("answer")) {
        setChosenAnswer(`${e.target.value}`)
    }
});

// sets answer to whatever is clicked
function setRightAnswer(answer) {
    return answer;
}

// checks if right answer
function setChosenAnswer(answer) {
    chosenAnswer = answer;
}

// changes button depending on if answer is correct
document.addEventListener("click", e => {
    if (e.target.classList.contains("submit-btn")) {
        if (chosenAnswer === e.target.value) {
            const parent = e.target.parentElement.parentElement.parentElement.parentElement;
            const index = e.target.dataset.index
            parent.style.transform = `translateX(-${index * 100}%)`;
            parent.style.transition = "all .3s linear";
            e.target.classList.remove("btn-primary", "btn-danger");
            e.target.classList.add("btn-success");
            e.target.innerText = "GOOD JOB"
            points++;
            checkIfDone(questions);
        } else {
            e.target.classList.remove("btn-primary");
            e.target.classList.add("btn-danger");
            e.target.innerText = "TRY AGAIN"
        }
    }
});

window.addEventListener("load", () => {
    checkIfDone(questions);
});

// if all answers are correct
function checkIfDone(questions) {
    if (points < questions.length) {
        // quizBody.innerHTML = "";
        showQuestions(questions, points);
    }
    if (points === questions.length) {
        document.body.innerHTML = ""
        document.body.innerHTML = `
        <div class="question">
            <div class="inner-question">
                <h3>GOOD JOB!!! :)</h3>
                <p>More quizzes and questions to come.</p>
            </div>
        </div>
        `
    }
}
checkIfDone(questions);