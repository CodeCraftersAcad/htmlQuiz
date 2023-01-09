const jsQuestions = [
    new Question(
        "Where does the script tag go in an HTML document",
        "Both",
        ["head tag", "body tag", "Both"],
        "radio"),
    new Question(
        "Fill in the blank",
        `carSedan`,
        `Declare a variable named "car" 
whose value is Sedan:<br/>
<code>let <input type="text" style="width:50px"/> = "<input type="text" style="width: 70px"/>";</code>
       
        `,
        "multiFill"
    ),
    new Question(
        "Fill in the blank",
        "322",
        `What will be the output: <br/>
        <code>console.log(3 + "2" + "2");</code> <br/>
        <input type="text"/>
        `,
        "singleFill"
    ),
    new Question(
        "Which variable keyword forces a value declaration",
        "const",
        ["var", "let", "const", "None of the above"],
        "radio"
    ),
    new Question(
        "Fill in the blank",
        "documentinput",
        `Select all input elements on the page: <br/>
        <code>
        const inputs = <input style='width: 75px'/>.querySelectorAll("<input style='width: 55px'/>");
        </code>
        `,
        "multiFill"
    ),
    new Question(
        "Which HTML attribute is a sign of using an external Javascript file?",
        "src",
        ["link", "src", "source", "rel"],
        "radio"
    )
]