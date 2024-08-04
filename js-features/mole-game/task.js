document.addEventListener("DOMContentLoaded", () => {
    let holes = document.querySelectorAll(".hole");
    let deadCounter = document.getElementById("dead");
    let lostCounter = document.getElementById("lost");
    let dead = 0;
    let lost = 0;
    let activeHole;

    function getHole(index) {
        return document.getElementById(`hole${index}`);
    }

    function getRandomHole() {
        let index = Math.floor(Math.random() * holes.length) + 1;
        return getHole(index);
    }

    function setActiveHole() {
        if (activeHole) {
            activeHole.classList.remove("hole_has-mole");
        }
        activeHole = getRandomHole();
        activeHole.classList.add("hole_has-mole");
    }

    function resetGame() {
        dead = 0;
        lost = 0;
        deadCounter.textContent = dead;
        lostCounter.textContent = lost;
        setActiveHole();
    }

    holes.forEach(hole => {
        hole.addEventListener("click", () => {
            if (hole === activeHole) {
                dead++;
                deadCounter.textContent = dead;
                if (dead === 10) {
                    alert("Вы победили!");
                    resetGame();
                }
            } else {
                lost++;
                lostCounter.textContent = lost;
                if (lost === 5) {
                    alert("Вы проиграли!");
                    resetGame();
                }
            }
            setActiveHole();
        });
    });

    setActiveHole();
});