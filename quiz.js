const questions = [
    {
        question: "Which language is used to style a web page?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    },
    {
        question: "Which language is used to structure a web page?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "HTML"
    },
    {
        question: "Which language is mainly used to add interactivity to web pages?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which HTML tag is used to display an image?",
        options: ["<image>", "<img>", "<picture>", "<src>"],
        answer: "<img>"
    },
    {
        question: "Which CSS property is used to change text color?",
        options: ["font-color", "text-color", "color", "text-style"],
        answer: "color"
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["background-color", "bg-color", "color-background", "background-style"],
        answer: "background-color"
    },
    {
        question: "Which CSS property is used to make an element a flex container?",
        options: ["position: flex", "display: flex", "flex: display", "layout: flex"],
        answer: "display: flex"
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: ["//", "/*", "#", "<!--"],
        answer: "//"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        answer: "var"
    },
    {
        question: "Which JavaScript method is used to print something to the console?",
        options: ["print()", "console.log()", "display()", "write()"],
        answer: "console.log()"
    },
    {
        question: "Which JavaScript method adds an element to the end of an array?",
        options: ["push()", "add()", "append()", "insert()"],
        answer: "push()"
    },
    {
        question: "Which JavaScript keyword is used to create a constant?",
        options: ["constant", "const", "fixed", "static"],
        answer: "const"
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        options: ["=", "==", "===", "!="],
        answer: "==="
    },
    {
        question: "Which data type represents true or false?",
        options: ["String", "Boolean", "Number", "Object"],
        answer: "Boolean"
    },
    {
        question: "Which programming language is known for its simple and readable syntax?",
        options: ["Python", "Assembly", "Machine Code", "Binary"],
        answer: "Python"
    },
    {
        question: "Which language is commonly used for Android application development?",
        options: ["Java", "HTML", "CSS", "SQL"],
        answer: "Java"
    },
    {
        question: "Which programming concept allows a class to inherit properties from another class?",
        options: ["Encapsulation", "Inheritance", "Abstraction", "Compilation"],
        answer: "Inheritance"
    },
    {
        question: "Which OOP concept hides internal implementation details?",
        options: ["Inheritance", "Polymorphism", "Abstraction", "Looping"],
        answer: "Abstraction"
    },
    {
        question: "What does OOP stand for?",
        options: [
            "Object-Oriented Programming",
            "Object-Organized Process",
            "Operational Object Programming",
            "Ordered Object Program"
        ],
        answer: "Object-Oriented Programming"
    },
    {
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        answer: "Stack"
    },
    {
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue"
    },
    {
        question: "Which data structure uses nodes connected by links?",
        options: ["Array", "Linked List", "Stack", "Hash Table"],
        answer: "Linked List"
    },
    {
        question: "Which data structure is commonly used in Breadth-First Search?",
        options: ["Stack", "Queue", "Heap", "Array"],
        answer: "Queue"
    },
    {
        question: "Which data structure is commonly used in Depth-First Search?",
        options: ["Queue", "Stack", "Heap", "HashMap"],
        answer: "Stack"
    },
    {
        question: "What is the average time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        answer: "O(log n)"
    },
    {
        question: "What is the time complexity of accessing an element in an array by index?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        answer: "O(1)"
    },
    {
        question: "Which sorting algorithm repeatedly swaps adjacent elements?",
        options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
        answer: "Bubble Sort"
    },
    {
        question: "Which data structure stores key-value pairs?",
        options: ["Stack", "Queue", "HashMap", "Array"],
        answer: "HashMap"
    },
    {
        question: "Which data structure is used to represent hierarchical data?",
        options: ["Array", "Tree", "Stack", "Queue"],
        answer: "Tree"
    },
    {
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Simple Query Language",
            "System Query Logic",
            "Structured Question Language"
        ],
        answer: "Structured Query Language"
    },
    {
        question: "Which SQL command is used to retrieve data?",
        options: ["GET", "SELECT", "FETCH", "READ"],
        answer: "SELECT"
    },
    {
        question: "Which SQL command is used to add new data?",
        options: ["ADD", "INSERT", "CREATE", "UPDATE"],
        answer: "INSERT"
    },
    {
        question: "Which SQL command is used to modify existing data?",
        options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
        answer: "UPDATE"
    },
    {
        question: "Which SQL command is used to remove records from a table?",
        options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
        answer: "DELETE"
    },
    {
        question: "What is a primary key?",
        options: [
            "A key that uniquely identifies a record",
            "A key used to delete a table",
            "A password for a database",
            "A key used only for sorting"
        ],
        answer: "A key that uniquely identifies a record"
    },
    {
        question: "What does DBMS stand for?",
        options: [
            "Database Management System",
            "Data Backup Management System",
            "Database Machine System",
            "Data Management Software"
        ],
        answer: "Database Management System"
    },
    {
        question: "Which protocol is commonly used to access web pages?",
        options: ["HTTP", "FTP", "SMTP", "SSH"],
        answer: "HTTP"
    },
    {
        question: "What does URL stand for?",
        options: [
            "Uniform Resource Locator",
            "Universal Resource Link",
            "Uniform Reference Link",
            "Universal Routing Locator"
        ],
        answer: "Uniform Resource Locator"
    },
    {
        question: "Which protocol is used to securely access websites?",
        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
        answer: "HTTPS"
    },
    {
        question: "What does IP stand for in networking?",
        options: [
            "Internet Protocol",
            "Internet Program",
            "Internal Protocol",
            "Internet Process"
        ],
        answer: "Internet Protocol"
    },
    {
        question: "Which device connects different networks together?",
        options: ["Switch", "Router", "Keyboard", "Monitor"],
        answer: "Router"
    },
    {
        question: "Which device is commonly used to connect devices within a LAN?",
        options: ["Router", "Switch", "Modem", "Printer"],
        answer: "Switch"
    },
    {
        question: "What does OS stand for?",
        options: [
            "Operating System",
            "Open Software",
            "Operating Software",
            "Online System"
        ],
        answer: "Operating System"
    },
    {
        question: "Which of these is an operating system?",
        options: ["Linux", "MySQL", "HTML", "Chrome"],
        answer: "Linux"
    },
    {
        question: "Which component is known as the brain of the computer?",
        options: ["RAM", "CPU", "SSD", "Monitor"],
        answer: "CPU"
    },
    {
        question: "Which memory is volatile?",
        options: ["ROM", "SSD", "RAM", "Hard Disk"],
        answer: "RAM"
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Processing Utility",
            "Central Program Unit",
            "Computer Process Unit"
        ],
        answer: "Central Processing Unit"
    },
    {
        question: "What does RAM stand for?",
        options: [
            "Random Access Memory",
            "Read Access Memory",
            "Rapid Access Module",
            "Random Allocation Memory"
        ],
        answer: "Random Access Memory"
    },
    {
        question: "Which number system uses only 0 and 1?",
        options: ["Decimal", "Binary", "Hexadecimal", "Octal"],
        answer: "Binary"
    },
    {
        question: "Which of the following is an example of cloud storage?",
        options: ["Google Drive", "CPU", "RAM", "Keyboard"],
        answer: "Google Drive"
    }
];

questions.sort(() => Math.random() - 0.5);

let quizQuestions = questions.slice(0, 5);

localStorage.setItem("totalQuestions", quizQuestions.length);

let questionIndex = 0;
let score = 0;

const options = document.querySelectorAll(".option");
const nxtBtn = document.getElementById("nextBtn");
const questionCount = document.getElementById("question-count");

function loadQuestion() {

    const currentQuestion = quizQuestions[questionIndex];

    document.getElementById("question").innerText =
        currentQuestion.question;

    document.getElementById("option1").innerText =
        currentQuestion.options[0];

    document.getElementById("option2").innerText =
        currentQuestion.options[1];

    document.getElementById("option3").innerText =
        currentQuestion.options[2];

    document.getElementById("option4").innerText =
        currentQuestion.options[3];

    loadUI();
    clearSelectedOption();

    if (questionIndex === quizQuestions.length - 1) {
        nxtBtn.innerText = "Finish Quiz";
    } else {
        nxtBtn.innerText = "Next Question";
    }
}

function loadUI() {
    questionCount.innerText =
        `Question : ${questionIndex + 1} of ${quizQuestions.length}`;
}

options.forEach(option => {

    option.addEventListener("click", () => {

        options.forEach(option => {
            option.classList.remove("selected");
        });

        option.classList.add("selected");
    });

});

nxtBtn.addEventListener("click", () => {

    const selectedAnswer = document.querySelector(".selected");

    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }

    if (
        selectedAnswer.innerText ===
        quizQuestions[questionIndex].answer
    ) {
        score++;
    }

    if (questionIndex === quizQuestions.length - 1) {

        localStorage.setItem("score", score);
        localStorage.setItem("totalQuestions", quizQuestions.length);

        window.location.href = "result.html";

        return;
    }

    questionIndex++;

    loadQuestion();
});

loadQuestion();
