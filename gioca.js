let score = 0;
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const resetBtn = document.getElementById("reset-btn");
const backBtn = document.getElementById("back-btn");

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
        scoreDisplay.textContent = score; // Aggiorna il punteggio
        candy.remove();
        generateCandy(); // Ricomincia il gioco con una nuova caramella
    });

    gameArea.appendChild(candy);
}

resetBtn.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = score; // Reset del punteggio visualizzato
    gameArea.innerHTML = ""; // Rimuove tutte le caramelle
    generateCandy(); // Ricomincia il gioco
});

// Funzione per tornare indietro alla pagina principale
backBtn.addEventListener("click", () => {
    window.location.href = "index.html"; // Torna alla pagina iniziale
});

// Inizia il gioco
generateCandy();
