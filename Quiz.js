// Quiz.js

const quizData = {
  question: "富士山の高さはどれくらい？",
  choices: [
    "2,776メートル",
    "3,776メートル", // 正解
    "4,776メートル",
    "5,776メートル"
  ],
  correctIndex: 1
};

window.addEventListener("DOMContentLoaded", () => {
  const questionEl = document.querySelector(".question");
  const choicesList = document.querySelector(".choices");
  const nextButton = document.querySelector(".navigation button");

  let selected = null;

  function loadQuiz() {
    questionEl.textContent = `問題1: ${quizData.question}`;
    choicesList.innerHTML = "";

    quizData.choices.forEach((choice, index) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = choice;
      button.dataset.index = index;

      button.addEventListener("click", () => {
        if (selected !== null) return; // 一度選んだら無効
        selected = index;
        if (index == quizData.correctIndex) {
          button.style.backgroundColor = "#a8e6a3"; // 正解: 緑
        } else {
          button.style.backgroundColor = "#f8a5a5"; // 不正解: 赤
          // 正解のボタンも強調
          const correctBtn = choicesList.querySelector(`button[data-index="${quizData.correctIndex}"]`);
          correctBtn.style.backgroundColor = "#a8e6a3";
        }
      });

      li.appendChild(button);
      choicesList.appendChild(li);
    });

    selected = null;
  }

  nextButton.addEventListener("click", () => {
    loadQuiz(); // 今は1問だけなので同じのを再表示
  });

  loadQuiz(); // 初期表示
});
