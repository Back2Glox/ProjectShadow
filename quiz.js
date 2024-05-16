document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = { Widowious: 0, Veridius: 0, Luminar: 0 };
    const answers = new FormData(event.target);
    for (let entry of answers.entries()) {
        score[entry[1]]++;
    }
    let result = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    document.getElementById('result').innerText = `You are most like: ${result}`;
});
