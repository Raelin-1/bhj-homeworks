document.addEventListener("DOMContentLoaded", function() {
    let currentTimer = document.getElementById("timer");
    let timeLeft = parseInt(currentTimer.innerText);

    let countDown = setInterval(function() {
        timeLeft -= 1;
        currentTimer.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countDown);
            let message = 'Вы победили в конкурсе!';
            alert(message);
            let text = message;
            downloadAsFile(text);

            function downloadAsFile(data) {
                let a = document.createElement("a");
                let file = new Blob([data], {type: 'application/json'});
                a.href = URL.createObjectURL(file);
                a.download = "example.txt";
                a.click();
            }
        }
    }, 1000);
});



