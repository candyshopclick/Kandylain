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
        score += 5;
        scoreDisplay.textContent = score; // Aggiorna il punteggio

        // Aggiungi animazione "popup" per il punteggio
        const scorePopup = document.createElement("div");
        scorePopup.classList.add("score-popup");
        scorePopup.textContent = "+5";
        scorePopup.style.left = candy.offsetLeft + "px";
        scorePopup.style.top = candy.offsetTop - 30 + "px"; // Posiziona sopra la caramella
        gameArea.appendChild(scorePopup);

        candy.remove(); // Rimuove la caramella
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
