let currentQuestion = 1;
let correctAnswers = 0;

const answers = {
    question1: 'a',
    question2: 'b',
    question3: 'b',
    question4: 'd',
    // Add more correct answers here
};

function checkAnswer(questionId, answer) {
    const questionElement = document.getElementById(questionId);
    const nextQuestionId = `question${currentQuestion + 1}`;

    if (answers[questionId] === answer) {
        correctAnswers++;
    }

    questionElement.classList.add('hidden');

    if (document.getElementById(nextQuestionId)) {
        document.getElementById(nextQuestionId).classList.remove('hidden');
        currentQuestion++;
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    let resultMessage = `<h2>You got ${correctAnswers} out of ${Object.keys(answers).length} questions right!</h2>`;

    if (correctAnswers === Object.keys(answers).length) {
        resultMessage += `<p>Congratulations! You've unlocked the secret password: <strong>Sh4d0wP@ss</strong></p>`;
    } else {
        resultMessage += `<p>Try again to unlock the secret password.</p>`;
    }

    resultContainer.innerHTML = resultMessage;
    resultContainer.classList.add('fadeIn');
}

// Function to change themes
function changeTheme(theme) {
    const themeStyles = {
        quiz: 'quiz.css',
        archive: 'archive_styles.css',
        characters: 'characters.css',
        main: 'style.css',
        nations: 'nations_styles.css',
        shadowious: 'shadowious.css'
    };

    const linkElement = document.querySelector('link[rel="stylesheet"]');
    linkElement.href = themeStyles[theme];
}
