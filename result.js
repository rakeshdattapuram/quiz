let score = document.getElementById("final-score")
let scoreValue = localStorage.getItem("score");
let totalQuestions = localStorage.getItem("totalQuestions");
score.textContent = `${scoreValue}/${totalQuestions}`;
let restBtn = document.getElementById("restart-btn");
restBtn.addEventListener("click", function () {
    window.location.href = "index.html"
})
