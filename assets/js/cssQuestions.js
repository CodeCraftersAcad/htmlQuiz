const cssQuestions = [
    new Question("Fill in the blank", "style", `Which HTML attribute is for inline css? <input type="text"/>`, "singleFill"),
    new Question(
        `How do you access the attribute id="demo" in CSS?`,
        "#demo",
        [".demo", "#demo", "-demo", "id#demo"],
        "radio"
    ),
    new Question(
        `How do you access the attribute class="demo" in CSS?`,
        ".demo",
        [".demo", "#demo", "-demo", "id#demo"],
        "radio"
    ),
    new Question(
        `Which property is used to set an elements background?`,
        "background-color",
        ["color-background", "color", "bg", "background-color"],
        "radio"
    ),
    new Question(
        `What is the correct syntax for setting text color in an element?`,
        "color: red;",
        ["text-color: red;", "font-color: red;", "color-type: red;", "color: red;"],
        "radio"
    ),
    new Question(
        `What is the syntax for a comment in CSS?`,
        "/*comment text*/",
        ["//comment text", "/*comment text*/", "//comment text//", "None of the above."],
        "radio"
    ),
    new Question(
        `Fill in the blank`,
        `top`,
        `<img style="display:block; height: 85px; width: auto; margin: 10px auto;" src="/assets/image/p_tag_margin.png" alt="Paragraph Tag Margin"/>The <code>p</code> element shown in the image above has it's margin set starting at what side of the paragraph <input type="text"/>.`,
        `singleFill`
    ),
    new Question(
        `Fill in the blank`,
        `pseudoclass`,
        `active, hover, clicked and focus are called a <input type="text"/> <input type="text"/> in CSS.`,
        "multiFill"
    ),
    new Question(
        `What does CSS stand for?`,
        "Cascading Style Sheets",
        ["Cascading Style Sheets", "Color Style Sheets", "Custom Style Sheets", "Computer Style Sheets"],
        "radio"
    ),
    new Question(
        `Which is the correct syntax`,
        "h1 { text-align: center; }",
        ["{ h1 text-align: center; }", "h1 { text-align: center; }", "h1 { text-center: align; }", "h1 { center-align: text; }"],
        "radio"
    ),
    new Question(
        "Fill in the blank",
        "154",
        `What is the width of the bod if the border is 5px, the margins 10px, the padding 12px and the content 50px? <input type="text"/>px`,
        "singleFill"
    ),
    new Question(
        `Which is the correct syntax to keep an image at scale with a height of 300 pixels?`,
        `style="height: 300px; width: auto;`,
        [`style="height: 300px; width: auto;`,
            `style="height: 300pixels; width: auto;`,
            `style="height: 300px; width: scale;`],
        "radio"
    ),
    new Question("Fill in the blank", "box model", `What are the set of rules called that determine how your web page is rendered (2 words)? <input type="text"/>`, "singleFill"),
    new Question(
        "For the CSS to work, each line inside of the curly braces has to end in a semi-colon?",
        "true",
        ["true", "false"],
        "radio"
    ),
]