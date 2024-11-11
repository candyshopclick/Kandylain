let score = 0;
const gameArea = document.getElementById("game-area");
const resetBtn = document.getElementById("reset-btn");

function generateCandy() {
    const candy = document.createElement("div");
    candy.classList.add("candy");
    candy.style.left = Math.random() * (gameArea.offsetWidth - 50) + "px";
    candy.style.top = Math.random() * (gameArea.offsetHeight - 50) + "px";
    candy.style.position = "absolute";
    candy.style.width = "50px";
    candy.style.height = "50px";
    candy.style.backgroundColor = "#ff66b2";
    candy.style.borderRadius = "50%";
    candy.style.cursor = "pointer";

    candy.addEventListener("click", () => {
        score++;
        candy.remove();
        generateCandy();
    });

    gameArea.appendChild(candy);
}

resetBtn.addEventListener("click", () => {
    score = 0;
    gameArea.innerHTML = ""; // Rimuove tutte le caramelle
    generateCandy(); // Ricomincia il gioco
});

// Inizia il gioco
generateCandy();
