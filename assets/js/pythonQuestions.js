const pythonQuestions = [
    new Question(
        "Fill in the blank",
        "dictionary",
        `<img style="display:block; height: 45px; width: auto; margin: 10px auto;" src="../image/pythonDTone.png" alt="Python One Data Type"/> What is the data type in the above image? A <input type="text"/>`,
        "singleFill"
    ),
    new Question(
        `Which is a bad variable name?`,
        "var-name",
        ["var-name", "varName", "var_name", "_varname"],
        "radio"
    ),
    new Question(
        "What is the correct way to make a comment?",
        "# comment text",
        ["/* comment text */", "// comment text", "# comment text"],
        "radio"
    ),
    new Question(
        "Indentation doesn't matter in Python",
        "False",
        ["True", "False"],
        "radio"
    ),
    new Question(
        "Fill in the blank",
        "py",
        "The corrent file extension for a python file is .<input type='text' style='width: 35px;'/>",
        "singleFill"
    ),
    new Question(
        "Fill in the blank",
        "float",
        "5.3 as a number is what data type? A <input type='text' style='width: 80px;'/>",
        "singleFill"
    ),
    new Question(
        "What is the correct way to define a function in python?",
        "def funcName():",
        ["function funcName(){}", "make funcName():", "def funcName():"],
        "radio"
    ),
    new Question(
        "What is the correct syntax to output text to the terminal",
        `print("Hello World")`,
        [`echo("Hello World")`, `console("Hello World")`, `log("Hello World")`, `print("Hello World")`],
        "radio"
    ),
    new Question(
        `What method is used to capitalize all letter in a string`,
        `upper()`,
        ["upper()", "capital()", "uppercase()", "toUpperCase()"],
        "radio"
    ),
    new Question(
        "Fill in the blank",
        "list",
        `<img style="display:block; height: 45px; width: auto; margin: 10px auto;" src="../image/pythonDTtwo.png" alt="Python Two Data Type"/> What is the data type in the above image? A <input type="text"/>`,
        "singleFill"
    ),
    new Question(
        "Fill in the blank",
        "set",
        `<img style="display:block; height: 45px; width: auto; margin: 10px auto;" src="../image/pythonDTthree.png" alt="Python Two Data Type"/> What is the data type in the above image? A <input type="text"/>`,
        "singleFill"
    ),
    new Question(
        "Fill in the blank",
        "tuple",
        `<img style="display:block; height: 35px; width: auto; margin: 10px auto;" src="../image/pythonDTfour.png" alt="Python Two Data Type"/> What is the data type in the above image? A <input type="text"/>`,
        "singleFill"
    ),
]