const correctAccessCode = "123456";
const totalSecondsDefault = 100012313131321 * 60;

let remainingSeconds = totalSecondsDefault;
let timerInterval = null;
let hasSubmitted = false;

const loginBtn = document.getElementById("loginBtn");
const submitBtn = document.getElementById("submitBtn");

loginBtn.addEventListener("click", checkCode);
submitBtn.addEventListener("click", submitQuiz);

function checkCode() {
  const inputCode = document.getElementById("accessCode").value.trim();
  const loginMessage = document.getElementById("loginMessage");

  if (inputCode !== correctAccessCode) {
    loginMessage.textContent = "Sai mã truy cập!";
    return;
  }

  document.getElementById("loginCard").classList.add("hidden");
  document.getElementById("quizCard").classList.remove("hidden");
  renderQuestions();
  startTimer();
}

function startTimer() {
  if (totalSecondsDefault === null) {
    document.getElementById("timer").textContent = "Không giới hạn";
    return;
  }

  remainingSeconds = totalSecondsDefault;
  updateTimerUI();

  timerInterval = setInterval(() => {
    remainingSeconds--;
    updateTimerUI();

    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      submitQuiz(true);
    }
  }, 1000);
}

function updateTimerUI() {
  if (totalSecondsDefault === null) {
    document.getElementById("timer").textContent = "Không giới hạn";
    return;
  }

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  document.getElementById("timer").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function renderQuestions() {
  const form = document.getElementById("quizForm");
  form.innerHTML = "";

  questions.forEach((q, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question";
    wrapper.dataset.index = index;
    wrapper.dataset.type = q.type;

    if (q.type === "multiple") {
      wrapper.innerHTML = `
        <h3>Câu ${q.number}</h3>
        <p>${q.question}</p>
      `;

      q.options.forEach((option, i) => {
        const letter = ["A", "B", "C", "D"][i];
        const label = document.createElement("label");
        label.className = "option";
        label.dataset.value = letter;
        label.innerHTML = `
          <input type="radio" name="q_${index}" value="${letter}" />
          <span>${letter}. ${option}</span>
        `;
        wrapper.appendChild(label);
      });
    }

    if (q.type === "truefalse") {
      wrapper.innerHTML = `
        <h3>Câu ${q.number}</h3>
        <p>${q.question}</p>
        <div class="passage">${q.passage}</div>
      `;

      q.statements.forEach((st, stIndex) => {
        const row = document.createElement("div");
        row.className = "statement-row";
        row.dataset.statementIndex = stIndex;

        row.innerHTML = `
          <div class="statement"><b>${st.label})</b> ${st.text}</div>
          <label class="tf-option" data-value="true">
            <input type="radio" name="q_${index}_${stIndex}" value="true" />
            <span>Đúng</span>
          </label>
          <label class="tf-option" data-value="false">
            <input type="radio" name="q_${index}_${stIndex}" value="false" />
            <span>Sai</span>
          </label>
        `;
        wrapper.appendChild(row);
      });
    }

    form.appendChild(wrapper);
  });
}

function submitQuiz(autoSubmit = false) {
  if (hasSubmitted) return;
  hasSubmitted = true;

  if (timerInterval) clearInterval(timerInterval);

  let score = 0;
  let totalItems = 0;
  let detail = [];

  questions.forEach((q, index) => {
    if (q.type === "multiple") {
      totalItems++;
      const selected = document.querySelector(`input[name="q_${index}"]:checked`);
      const userAnswer = selected ? selected.value : "";
      if (userAnswer === q.answer) score++;

      colorMultipleChoice(index, q.answer, userAnswer);

      detail.push(`Câu ${q.number}: ${userAnswer || "chưa chọn"} | Đáp án đúng: ${q.answer}`);
    }

    if (q.type === "truefalse") {
      q.statements.forEach((st, stIndex) => {
        totalItems++;
        const selected = document.querySelector(`input[name="q_${index}_${stIndex}"]:checked`);
        const userAnswer = selected ? selected.value === "true" : null;
        if (userAnswer === st.answer) score++;

        colorTrueFalse(index, stIndex, st.answer, userAnswer);

        detail.push(
          `Câu ${q.number}${st.label}: ${selected ? (userAnswer ? "Đúng" : "Sai") : "chưa chọn"} | Đáp án đúng: ${st.answer ? "Đúng" : "Sai"}`
        );
      });
    }
  });

  disableAllInputs();
  submitBtn.disabled = true;
  submitBtn.textContent = "Đã nộp bài";

  const studentName = document.getElementById("studentName").value.trim() || "Chưa nhập tên";
  const resultBox = document.getElementById("result");
  resultBox.style.display = "block";
  resultBox.textContent =
    `Họ tên: ${studentName}\n` +
    `Kết quả: ${score}/${totalItems}\n` +
    `Trạng thái: ${autoSubmit ? "Hết giờ, tự nộp bài." : "Đã nộp bài."}\n\n` +
    `Màu sắc trên bài làm:\n` +
    `- Xanh: đáp án đúng\n` +
    `- Đỏ: đáp án bạn chọn nhưng sai`;

  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

function colorMultipleChoice(questionIndex, correctAnswer, userAnswer) {
  const questionBox = document.querySelector(`.question[data-index="${questionIndex}"]`);
  const options = questionBox.querySelectorAll(".option");

  options.forEach((option) => {
    const value = option.dataset.value;
    const input = option.querySelector("input");

    if (value === correctAnswer) {
      option.classList.add("correct-answer");
    }

    if (userAnswer && value === userAnswer && userAnswer !== correctAnswer) {
      option.classList.add("wrong-answer");
    }

    if (input.checked) {
      option.classList.add("selected-answer");
    }
  });
}

function colorTrueFalse(questionIndex, statementIndex, correctAnswer, userAnswer) {
  const row = document.querySelector(
    `.question[data-index="${questionIndex}"] .statement-row[data-statement-index="${statementIndex}"]`
  );
  const options = row.querySelectorAll(".tf-option");

  options.forEach((option) => {
    const value = option.dataset.value === "true";

    if (value === correctAnswer) {
      option.classList.add("correct-answer");
    }

    if (userAnswer !== null && value === userAnswer && userAnswer !== correctAnswer) {
      option.classList.add("wrong-answer");
    }

    const input = option.querySelector("input");
    if (input.checked) {
      option.classList.add("selected-answer");
    }
  });
}

function disableAllInputs() {
  document.querySelectorAll("input").forEach((input) => {
    input.disabled = true;
  });
}
