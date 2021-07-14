const player1Score = document.querySelector('#player_1_score')
const player2Score = document.querySelector('#player_2_score')

let player1Current = document.querySelector('#player_1_current')
let player2Current = document.querySelector('#player_2_current')

const rtdBtn = document.querySelector('#rtd');
const holdBtn = document.querySelector('#hold');
const newGameBtn = document.querySelector('#new_game');

/**
 * true = player 1 round
 * false = player 2 round
 *
 * @type {boolean}
 */
let round = true;


const startNewGame = () => {
    player1Score.innerHTML = 0
    player2Score.innerHTML = 0

    player1Current.innerHTML = 0
    player2Current.innerHTML = 0
}

const rollTheDice = () => {
    let currentDiceNumber = Math.round(Math.random() * (6 - 1) + 1);
    if(currentDiceNumber === 1){
        // C'est la fin du tour
        if(round){
            round = false
            player1Current.innerHTML = 0
        } else {
            round = true
            player2Current.innerHTML = 0
        }

    } else {
        if(round){
            // C'est au tour du premier joueur

           let player1CurrentValue = player1Current.innerHTML

            player1Current.innerHTML = parseInt(player1CurrentValue) + currentDiceNumber

        } else {
            // C'est au tour du second joueur
            let player2CurrentValue = player2Current.innerHTML

            player2Current.innerHTML = parseInt(player2CurrentValue) + currentDiceNumber
        }
    }
}

const hold = () => {
    let player1ScoreValue = player1Score.innerHTML
    let player2ScoreValue = player2Score.innerHTML
    if(round){
        // On envoi vers le global du player 1
        checkWin(player1ScoreValue, '1')

        let player1CurrentValue = player1Current.innerHTML

        resetCurrentScore('1')


        player1Score.innerHTML = parseInt(player1ScoreValue) + parseInt(player1CurrentValue)

    } else {
        // On envoi vers le global du player 2

        let player2CurrentValue = player2Current.innerHTML


        resetCurrentScore('2')

        player2Score.innerHTML = parseInt(player2ScoreValue) + parseInt(player2CurrentValue)
        checkWin(player2ScoreValue, '2')
    }
}

const checkWin = (playerScore, currentPlayer) => {
    if(currentPlayer === "1" && playerScore >= 100){
        startNewGame()
        alert('Le joueur 1 a gagné')
    } else if(currentPlayer === "2" && playerScore >= 100) {
        startNewGame()
        alert('Le joueur 2 a gagné')

    }
}

const resetCurrentScore = (player) => {
    if (player === "1"){
        player1Current.innerHTML = 0
    } else {
        player2Current.innerHTML = 0
    }
}

newGameBtn.addEventListener('click', () => {
    startNewGame()
})

rtdBtn.addEventListener('click', () => {
    rollTheDice()
})

holdBtn.addEventListener('click', () => {
    hold()
})




