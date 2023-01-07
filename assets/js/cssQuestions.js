const cssQuestions = [
    new Question("Fill in the blank", "style", `Which HTML attribute is for inline css? <input type="text"/>`),
    new Question(
        `How do you access the attribute id="demo" in CSS?`,
        "#demo",
        [".demo", "#demo", "-demo", "id#demo"]
    ),
    new Question(
        `How do you access the attribute class="demo" in CSS?`,
        ".demo",
        [".demo", "#demo", "-demo", "id#demo"]
    ),
    new Question(
        `Which property is used to set an elements background?`,
        "background-color",
        ["color-background", "color", "bg", "background-color"]
    ),
    new Question(
        `What is the syntax for a comment in CSS?`,
        "/*comment text*/",
        ["//comment text", "/*comment text*/", "//comment text//", "None of the above."]
    ),
    new Question(
        `What does CSS stand for?`,
        "Cascading Style Sheets",
        ["Cascading Style Sheets", "Color Style Sheets", "Custom Style Sheets", "Computer Style Sheets"]
    ),
    new Question(
        `Which is the correct syntax`,
        "h1 { text-align: center; }",
        ["{ h1 text-align: center; }", "h1 { text-align: center; }", "h1 { text-center: align; }", "h1 { center-align: text; }",]
    ),
    new Question(
        `Which is the correct syntax to keep an image at scale with a height of 300 pixels?`,
        `style="height: 300px; width: auto;`,
        [`style="height: 300px; width: auto;`,
            `style="height: 300pixels; width: auto;`,
            `style="height: 300px; width: scale;`]
    ),
    new Question("Fill in the blank", "box model", `What are the set of rules called that determine how your web page is rendered (2 words)? <input type="text"/>`),

]