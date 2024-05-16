function submitQuiz() {
    const answers = {
        q1: document.getElementById('q1').value,
        q2: document.getElementById('q2').value,
        q3: document.getElementById('q3').value,
        q4: document.getElementById('q4').value,
        q5: document.getElementById('q5').value,
    };

    let score = {
        strategic: 0,
        secretive: 0,
        knowledgeable: 0
    };

    for (let key in answers) {
        score[answers[key]]++;
    }

    let result = '';
    if (score.strategic > score.secretive && score.strategic > score.knowledgeable) {
        result = 'You are Widowious Glistan, the calculating strategist!';
    } else if (score.secretive > score.strategic && score.secretive > score.knowledgeable) {
        result = 'You are Veridius Glixen, the master of encryption!';
    } else if (score.knowledgeable > score.strategic && score.knowledgeable > score.secretive) {
        result = 'You are Luminar Glistral, the guardian of ancient knowledge!';
    } else {
        result = 'You have a balanced personality of all Shadows!';
    }

    document.getElementById('result').textContent = result;
}
