async function loadQuiz(jsonPath) {
    const response = await fetch(jsonPath);
    const questions = await response.json();
    window.currentQuestions = questions; // Store for answer checking
  
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = '';
    questions.forEach((item, idx) => {
      let optionsHtml = '';
      item.options.forEach((opt, optIdx) => {
        optionsHtml += `
          <label>
            <input type="radio" name="q${idx}" value="${optIdx}"> ${opt}
          </label><br>
        `;
      });
      quizDiv.innerHTML += `
        <div class="question">
          <p>${idx + 1}. ${item.question}</p>
          ${optionsHtml}
        </div>
      `;
    });
  }
  
  function checkAnswers() {
    const questions = window.currentQuestions;
    let score = 0;
    questions.forEach((item, idx) => {
      const radios = document.getElementsByName('q' + idx);
      let selected = -1;
      radios.forEach((radio) => {
        if (radio.checked) selected = parseInt(radio.value, 10);
      });
      if (selected === item.answer) score++;
    });
    document.getElementById('result').textContent =
      `You scored ${score} out of ${questions.length}`;
  }