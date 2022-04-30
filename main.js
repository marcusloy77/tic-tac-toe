var bod = document.querySelector('body')
var player1Gifs = document.getElementById('p1')
var player2Gifs = document.getElementById('p2')


let ryuAnims = {
    'stance' : "./images/ryuAnims/ryu-good-original-stance-sfa.gif",
    'p1' : "./images/ryuAnims/ryu-sfa-a1.gif",
    'p2' : "./images/ryuAnims/ryu-sfa-a2.gif",
    'p3' : "./images/ryuAnims/ryu-sfa-a3.gif",
    'kick' : "./images/ryuAnims/ryu-sfa-a6.gif",
    'haduken' : "./images/ryuAnims/ken-hdstance.gif",
    'shryD' : "./images/ryuAnims/ken-hdstance.gif",
    'win' : "",
    'lose' : ""
}

function ryuAttack(turnCount) {
    console.log(turnCount1)
    //turnCount1 = 3
    if(turnCount1 == 0){
        player1Gifs.src=ryuAnims.p2
        player1Gifs.style.height = '350px'
        setTimeout(function(){
            player1Gifs.src=ryuAnims.stance
            player1Gifs.style.height = '300px'
        }, 1800)   
    }
    if(turnCount > 3){
        turnCount1 = 0
    }
}

let kenAnims = {
    'stance' : "./images/KenAnims/ken-hdstance.gif",
    'kick1' : './images/KenAnims/ken-sfa-mk.gif',
    'kick2' : './images/KenAnims/sf-ken.gif',
    'haduken' : './images/KenAnims/ken-alphafireball.gif',
    'shryD' : './images/KenAnims/ken-sshinryuken.gif',
    'win' : "",
    'lose' : ""
}

let turnCount1 = 0
let turnCount2 = 0

let board = {
    "1a" : 0,
    "1b" : 0,
    "1c" : 0,
    "2a" : 0,
    "2b" : 0,
    "2c" : 0,
    "3a" : 0,
    "3b" : 0,
    "3c" : 0,
    "lastMove" : ""
}

let playermove = 1
let gameFinished = false


function evalBoard(board, playermove) {
    switch(board.lastMove){
        case "":
            return false

        case "1a":
            if(board["1b"] == playermove && board["1c"] == playermove){
                return true
            }
            else if(board["2b"] == playermove && board["3c"] == playermove){
                return true
            }
            else if(board["2a"] == playermove && board["3a"] == playermove){
                return true
            }
            else{
                return false
            }//
        case "1b":
            if(board["1a"] == playermove && board["1c"] == playermove){
                return true
            }
            else if(board["2b"] == playermove && board["3b"] == playermove){
                return true
            }
            else{
                return false
            }//
        case "1c":
            if(board["1b"] == playermove && board["1a"] == playermove){
                return true
            }
            else if(board["2b"] == playermove && board["3a"] == playermove){
                return true
            }
            else if(board["2c"] == playermove && board["3c"] == playermove){
                return true
            }
            else{
                return false
            }//

        case "2a":
            if(board["1a"] == playermove && board["3a"] == playermove){
                return true
            }
            else if(board["2b"] == playermove && board["2c"] == playermove){
                return true
            }
            else{
                return false
            }//
        case "2b":
            if(board["2a"] == playermove && board["2c"] == playermove){
                return true
            }
            else if(board["1b"] == playermove && board["3b"] == playermove){
                return true
            }
            else if(board["3a"] == playermove && board["1c"] == playermove){
                return true
            }
            else if(board["1a"] == playermove && board["3c"] == playermove){
                return true
            }
            else{
                return false
            }
        case "2c":
            if(board["2b"] == playermove && board["2a"] == playermove){
                return true
            }
            else if(board["1c"] == playermove && board["3c"] == playermove){
                return true
            }
            else{
                return false
            }//
        case "3a":
            if(board["1a"] == playermove && board["2a"] == playermove){
                return true
            }
            else if(board["2b"] == playermove && board["1c"] == playermove){
                return true
            }
            else if(board["3b"] == playermove && board["3c"] == playermove){
                return true
            }
            else{
                return false
            }//
        case "3b":
            if(board["1b"] == playermove && board["2b"] == playermove){
                return true
            }
            else if(board["3a"] == playermove && board["3c"] == playermove){
                return true
            }
            else{
                return false
            }//
        case "3c":
            if(board["2b"] == playermove && board["1a"] == playermove){
                return true
            }
            else if(board["3b"] == playermove && board["3a"] == playermove){
                return true
            }
            else if(board["2c"] == playermove && board["1c"] == playermove){
                return true
            }
            else{
                return false
            }//
    }

}

function legalMove(board, playermove) {
    if(board[playermove] > 0) {
        return false
    }
    return true
}
function boardFull(board) {
    for (let [key, value] of Object.entries(board)) {      
        if (board[key] == 0){
            return false
        }
        
    }
    return true
}

function declareWinner(playermove) {
    document.querySelector('h2').textContent = "Player " + playermove +" Wins!!!! Cake for All"
}
function declareDraw() {
    document.querySelector('h2').textContent = "Draw :("
}

function drawAttack(player) {
    console.log('a')
    if(player === 1) {
        ryuAttack(turnCount1)
        turnCount1 += 1
    }
    else {
        kenAttack(turnCount2)
        turnCount2 +=1
    }

}


function kenAttack(turnCount) {
    //turnCount1 = 3
    if(turnCount == 0){
        player2Gifs.src=kenAnims.kick1
        setTimeout(function(){
            player2Gifs.src=kenAnims.stance
        }, 800)
        
    }
    else if(turnCount == 1){
        player2Gifs.src=kenAnims.kick2
        setTimeout(function(){
            player2Gifs.src=kenAnims.stance
            player2Gifs.style.height = '300px'
        }, 1520)
    }
    else if(turnCount == 2){
        player2Gifs.src=kenAnims.haduken
        player2Gifs.style.height = '320px'
        setTimeout(function(){
            player2Gifs.src=kenAnims.stance
            player2Gifs.style.height = '300px'
        }, 900)
    }
    else if(turnCount == 3){
        player2Gifs.src=kenAnims.shryD
        player2Gifs.style.height = '670px'
        player2Gifs.style.position = 'abolute'
        player2Gifs.style.top = '50%'
        player2Gifs.style.left = '50%'
        player2Gifs.style.bottom = '0'
        player2Gifs.style.right = '0'
        setTimeout(function(){
            player2Gifs.src=kenAnims.stance
            player2Gifs.style.height = '300px'
        }, 2000)
    }
    
    console.log(turnCount1)
    if(turnCount1 > 3){
        turnCount1 = 0
    }
}


function main(event){
    if(event.target.classList.contains('square')){
        //checking if game is already finished so no more x's to add
        if(boardFull(board)){
            return
        }
        if(gameFinished){
            return
        }
         //checking if move is legal, adding move to board
        if(legalMove(board, event.target.id)){
            board[event.target.id] = playermove
            board["lastMove"] = event.target.id
            //drawing xs and os
            if(playermove == 1){
                event.target.textContent = 'X'
                drawAttack(1)
            }
            else {
                event.target.textContent = 'O'
                drawAttack(2)
            }
            //checking if the last move ended in a winner
            if(evalBoard(board, playermove)){
                gameFinished = true
                declareWinner(playermove)
            }
            //pretty self explanatory with var names
            if(boardFull(board) && !gameFinished){
                declareDraw()
            }
            //switching players
            if(playermove == 1){
                playermove = 2
            }
            else{
                playermove = 1
            }
        }
    }
}

function restart(event) {
    if(event.target.id == "restartBtn"){
        for (let [key, value] of Object.entries(board)) {
            board[key] = 0
            try {
                document.getElementById(key).textContent = ""
            }
            catch {
                console.log('trying to fix this loop idk')
            }
        }
        gameFinished = false
        playermove = 1
        document.querySelector('h2').textContent = "Round 1: Fight!"
        turnCount1 = 0
        turnCount2 = 0
    }
}

bod.addEventListener('click', main)
bod.addEventListener('click', restart)