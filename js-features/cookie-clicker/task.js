document.addEventListener("DOMContentLoaded", function() {
    let counter = document.getElementById("clicker__counter");
    let cookie = document.getElementById("cookie");
    let speed = document.getElementById("clicker__speed");
    let clickCount = 0;
    let isLarge = false;
    let lastClickTime = new Date();

    cookie.addEventListener("click", () => {
        clickCount += 1;
        counter.textContent = clickCount;
        
        if (isLarge) {
            cookie.width = "200";
        } else {
            cookie.width = "150";
        }
        isLarge = !isLarge;

        const currentTime = new Date();
        const timeDiff = (currentTime - lastClickTime) / 1000;
        const clickSpeed = (1 / timeDiff); 
        
        speed.textContent = clickSpeed;
        lastClickTime = currentTime;
    });
});