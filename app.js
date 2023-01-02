const quizBody = document.querySelector("#quiz-body");
let points = 0;
let chosenAnswer;
document.addEventListener("click", e => {
    if (e.target.classList.contains("answer")) {
        setChosenAnswer(`${e.target.value}`)
    }
});
function setRightAnswer(answer) {
    return answer;
}
function setChosenAnswer(answer) {
    chosenAnswer = answer;
}
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
            checkIfDone();
        } else {
            e.target.classList.remove("btn-primary");
            e.target.classList.add("btn-danger");
            e.target.innerText = "TRY AGAIN"
        }
    }
});

window.addEventListener("load", () => {
    checkIfDone();
});
function checkIfDone() {
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