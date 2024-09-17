function checkAnswers() {
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'b'
    };

    let score = 0;
    const formData = new FormData(quizForm);

    for (let [question, answer] of formData.entries()) {
        if (answer === answers[question]) {
            score++;
        }
    }

    resultDiv.innerHTML = `Você acertou ${score} de 3 perguntas.`;
}
