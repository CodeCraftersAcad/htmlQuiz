function showQuestions(arr, points) {
    arr.map((item, i) => {
        quizBody.innerHTML += `
        <!-- <div class="question" style="visibility:${i === points ? 'visible' : 'hidden'};"> -->
        <div class="question">
        <div class="inner-question">
        <p class="text-end"><strong>${i + 1}</strong>/ <strong>${arr.length}</strong></p>
                <h3 class="mb-3">${item.question}</h3>
                <hr class="my-3"/>
                ${item.answerList.map(q => {
            return `
                    <div class="form-check pl-3 py-2">
                        <input class="form-check-input answer" type="radio" value="${q}" name="${item.question}" id="${i}">
                        <label class="form-check-label ps-2" for="${q}">
                            ${q}
                        </label>
                        <hr/>
                    </div>
                    `
        }).join(" ")}
        <div class="d-grid gap-2 col-6 mx-auto my-3">
            <button class="btn btn-primary submit-btn" type="button" value="${item.answer}" data-index="${i + 1}">SUBMIT</button>
        </div>
        <p><small>Check out our free coding workshops on <a href="https://parttimedevs.com/freelearning.html" target="_blank">PartTimeDevs.com</a></small></p>
        </div>
        </div>
        `
    })
}