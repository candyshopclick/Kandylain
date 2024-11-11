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

function startGame() {
    score = 0;
    timer = 15;
    scoreDisplay.textContent = 'Punteggio: ' + score;
    timerDisplay.textContent = timer;
    scoreBoard.style.display = 'none';
    spawnCandy();
    interval = setInterval(updateTimer, 1000);
    startGameBtn.style.display = 'none'; // Nascondi il tasto "Inizia Gioco"
}

function updateTimer() {
    timer--;
    timerDisplay.textContent = timer;
    if (timer === 0) {
        clearInterval(interval);
        showFinalScore();
    }
}

function spawnCandy() {
    if (!candyGenerated) {
        let candy = document.createElement('span');
        candy.classList.add('candy');
        candy.textContent = '🍬';
        candyBox.appendChild(candy);

        let randomPositionX = Math.floor(Math.random() * (candyBox.offsetWidth - 50));
        let randomPositionY = Math.floor(Math.random() * (candyBox.offsetHeight - 50));

        candy.style.left = randomPositionX + 'px';
        candy.style.top = randomPositionY + 'px';

        candy.addEventListener('click', function () {
            addScore();
            showScoreAnimation(candy);  // Mostra +5 sopra la caramella
            candy.remove();
            candyGenerated = false; // Permette di generare una nuova caramella
            spawnCandy();
        });

        candyGenerated = true; // Impedisce che vengano generate più caramelle
    }
}

function addScore() {
    score += 5;
    scoreDisplay.textContent = 'Punteggio: ' + score;
}

function showScoreAnimation(candy) {
    let scoreAnimation = document.createElement('div');
    scoreAnimation.classList.add('score-animation');
    scoreAnimation.textContent = '+5';
    document.body.appendChild(scoreAnimation);

    scoreAnimation.style.position = 'absolute';
    scoreAnimation.style.left = (candy.offsetLeft + candy.offsetWidth / 2 - 15) + 'px'; // Posiziona sopra la caramella
    scoreAnimation.style.top = (candy.offsetTop - 20) + 'px';
    scoreAnimation.style.fontSize = '24px';
    scoreAnimation.style.color = '#FF69B4';
    scoreAnimation.style.animation = 'fadeOut 1s forwards';

    setTimeout(function () {
        scoreAnimation.remove();
    }, 1000);
}

function showFinalScore() {
    finalScoreDisplay.textContent = 'Punteggio finale: ' + score;
    scoreBoard.style.display = 'block';
}

function restartGame() {
    score = 0;
    timer = 15;
    scoreDisplay.textContent = 'Punteggio: ' + score;
    timerDisplay.textContent = timer;
    scoreBoard.style.display = 'none';
    spawnCandy();
    interval = setInterval(updateTimer, 1000);
}

closeBtn.addEventListener('click', function() {
    scoreBoard.style.display = 'none';
});

replayBtn.addEventListener('click', function() {
    restartGame();
});

startGameBtn.addEventListener('click', startGame);
