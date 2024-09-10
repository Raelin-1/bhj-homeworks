document.addEventListener('DOMContentLoaded', () => {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    fetch('https://students.netoservices.ru/nestjs-backend/poll')
        .then(response => response.json())
        .then(data => {
            // Display the poll question
            pollTitle.textContent = data.data.title;

            // Display the answers as buttons
            data.data.answers.forEach(answer => {
                const button = document.createElement('button');
                button.classList.add('poll__answer');
                button.textContent = answer;

                button.addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!');
                });

                pollAnswers.appendChild(button);
            });
        })
        .catch(error => {
            console.error('Error fetching poll data:', error);
        });
});
