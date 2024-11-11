let score = 0;  // Punteggio iniziale
let candy = document.getElementById('candy');
let scoreDisplay = document.getElementById('score');
let finalScore = document.getElementById('final-score-value');
let scoreBoard = document.getElementById('score-board');
let closeBtn = document.getElementById('close-btn');

// Funzione per generare una caramella in una posizione casuale
function generateCandy() {
    let box = document.querySelector('.candy-box');
    let randomX = Math.random() * (box.offsetWidth - candy.offsetWidth);
    let randomY = Math.random() * (box.offsetHeight - candy.offsetHeight);

    candy.style.left = randomX + 'px';
    candy.style.top = randomY + 'px';
    candy.style.display = 'block';
}

// Funzione per aumentare il punteggio e nascondere la caramella
candy.addEventListener('click', () => {
    score += 5;
    scoreDisplay.textContent = score;
    candy.style.display = 'none';  // Nasconde la caramella

    // Animazione +5
    let plusFive = document.createElement('div');
    plusFive.textContent = '+5';
    plusFive.style.position = 'absolute';
    plusFive.style.color = '#FF1493';
    plusFive.style.fontSize = '30px';
    plusFive.style.top = candy.offsetTop + 'px';
    plusFive.style.left = candy.offsetLeft + 'px';
    document.body.appendChild(plusFive);

    // Animazione per il +5
    let animation = plusFive.animate([
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: 'translateY(-30px)', opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards'
    });

    animation.onfinish = () => {
        document.body.removeChild(plusFive);
    };

    // Genera una nuova caramella
    generateCandy();
});

// Timer del gioco
let timer = 15;
let timerInterval = setInterval(() => {
    if (timer <= 0) {
        clearInterval(timerInterval);
        showFinalScore();
    } else {
        timer--;
    }
}, 1000);

// Mostra il punteggio finale
function showFinalScore() {
    finalScore.textContent = score;
    scoreBoard.style.display = 'block';
}

// Chiudi il pannello del punteggio finale
closeBtn.addEventListener('click', () => {
    scoreBoard.style.display = 'none';
});

// Avvia il gioco con la prima caramella
generateCandy();
