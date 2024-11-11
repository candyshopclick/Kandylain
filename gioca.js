let score = 0;
let timer = 15;
let interval;
let candyBox = document.getElementById('candy-box');
let scoreDisplay = document.getElementById('score');
let timerDisplay = document.getElementById('time-left');
let finalScoreDisplay = document.getElementById('final-score');
let scoreBoard = document.getElementById('score-board');
let candyGenerated = false;
let closeBtn = document.getElementById('close-btn');
let startGameBtn = document.getElementById('start-game-btn');
let replayBtn = document.getElementById('replay-btn');
let startNewGameBtn = document.getElementById('start-new-game');
let canClickCandy = false;

// Funzione per iniziare il gioco
function startGame() {
    score = 0;
    timer = 15;
    scoreDisplay.textContent = 'Punteggio: ' + score;
    timerDisplay.textContent = timer;
    scoreBoard.style.display = 'none';
    spawnCandy();
    interval = setInterval(updateTimer, 1000);
    startGameBtn.style.display = 'none'; // Nascondi il tasto "Inizia Gioco"
    canClickCandy = true; // Permette di cliccare le caramelle
}

// Funzione per aggiornare il timer
function updateTimer() {
    timer--;
    timerDisplay.textContent = timer;
    if (timer === 0) {
        clearInterval(interval);
        showFinalScore();
    }
}

// Funzione per generare le caramelle
function spawnCandy() {
    if (canClickCandy && !candyGenerated) {
        let candy = document.createElement('span');
        candy.classList.add('candy');
        candy.textContent = '🍬';  // Caramella
        candyBox.appendChild(candy);

        let randomPositionX = Math.floor(Math.random() * (candyBox.offsetWidth - 50));
        let randomPositionY = Math.floor(Math.random() * (candyBox.offsetHeight - 50));

        candy.style.left = randomPositionX + 'px';
        candy.style.top = randomPositionY + 'px';

        candy.addEventListener('click', function () {
            if (canClickCandy) {
                addScore();
                showScoreAnimation(candy);  // Mostra +5 sopra la caramella
                candy.remove();
                candyGenerated = false; // Permette di generare una nuova caramella
                spawnCandy();
            }
        });

        candyGenerated = true; // Impedisce che vengano generate più caramelle contemporaneamente
    }
}

// Funzione per aggiungere punteggio
function addScore() {
    score += 5;
    scoreDisplay.textContent = 'Punteggio: ' + score;
}

// Funzione per mostrare l'animazione del punteggio sopra la caramella
function showScoreAnimation(candy) {
    let scoreAnimation = document.createElement('div');
    scoreAnimation.classList.add('score-animation');
    scoreAnimation.textContent = '+5';
    candyBox.appendChild(scoreAnimation);

    let xPosition = candy.offsetLeft + candy.offsetWidth / 2 - scoreAnimation.offsetWidth / 2;
    let yPosition = candy.offsetTop - 30;

    scoreAnimation.style.left = xPosition + 'px';
    scoreAnimation.style.top = yPosition + 'px';
}

// Funzione per mostrare il punteggio finale
function showFinalScore() {
    finalScoreDisplay.textContent = 'Punteggio finale: ' + score;
    scoreBoard.style.display = 'block';
    canClickCandy = false; // Non è più possibile cliccare le caramelle
}

// Funzione per rigiocare
function restartGame() {
    score = 0;
    timer = 15;
    scoreDisplay.textContent = 'Punteggio: ' + score;
    timerDisplay.textContent = timer;
    scoreBoard.style.display = 'none';
    spawnCandy();
    interval = setInterval(updateTimer, 1000);
    startGameBtn.style.display = 'none'; // Nascondi il tasto "Inizia Gioco"
    canClickCandy = true; // Permette di cliccare le caramelle
}

// Funzione per chiudere la schermata finale
closeBtn.addEventListener('click', function () {
    scoreBoard.style.display = 'none';
    startGameBtn.style.display = 'block'; // Mostra il tasto "Inizia Gioco"
});

// Event listener per il tasto "Inizia Gioco"
startGameBtn.addEventListener('click', startGame);

// Event listener per il tasto "Rigioca"
replayBtn.addEventListener('click', restartGame);

// Event listener per il tasto "Nuovo Gioco"
startNewGameBtn.addEventListener('click', restartGame);
