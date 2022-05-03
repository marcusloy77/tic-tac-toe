var bod = document.querySelector('body')
var player1Gifs = document.getElementById('p1')
var player2Gifs = document.getElementById('p2')
var player1ParentGifs = document.getElementById('p1parent')
var player2ParentGifs = document.getElementById('p2parent')
let turnCount1 = 0
let turnCount2 = 0
let round = 1

let stageSounds = {
    '1' : './sounds/stage/1.mp3',
    '2' : './sounds/stage/2.mp3',
    '3' : './sounds/stage/3.mp3',
    '4' : './sounds/stage/4.mp3',
    'fight' : './sounds/stage/fight.mp3',
    'round' : './sounds/stage/round.mp3',
    'startMus' : './sounds/stage/street-fighter-start.mp3',
    'ko' : './sounds/stage/streetfighterko.mp3',
    'youwin' : './sounds/stage/you-win-street-fighter.mp3',
    'you' : './sounds/stage/you.mp3',

}
let ryuSounds = {
    'punch1' : './sounds/stage/punch.mp3',
    'punch2' : './sounds/stage/punch (1).mp3',
    'punch3' : './sounds/stage/punch (2).mp3',
    'hadouken' : './sounds/ryu/hadouken.mp3',
    'hadouken2' : './sounds/ryu/hadouken2.mp3',
    'kick' : './sounds/ryu/ryuken-kick.mp3',
    'death' : './sounds/ryu/ryus-death.mp3',
    'shoyuken' : './sounds/ryu/shoyuken.mp3',
}
let kenSounds = {
    'punch1' : './sounds/stage/punch.mp3',
    'punch2' : './sounds/stage/punch (1).mp3',
    'punch3' : './sounds/stage/punch (2).mp3',
    'hadouken' : './sounds/ken/kens-hadouken.mp3',
    'kick' : './sounds/ryu/ryuken-kick.mp3',
    'death' : './sounds/ken/kens-death.mp3',
    'shoyuken' : './sounds/ryu/shoyuken.mp3',

}

function soundPlayer(sound) {
    let audio = new Audio(sound);
    audio.play();
}

let ryuAnims = {
    'stance' : "./images/ryuAnims/ryu-good-original-stance-sfa.gif",
    'p1' : "./images/ryuAnims/ryu-sfa-a1.gif",
    'p2' : "./images/ryuAnims/ryu-sfa-a2.gif",
    'p3' : "./images/ryuAnims/ryu-sfa-a3.gif",
    'kick' : "./images/ryuAnims/ryu-sfa-a6.gif",
    'haduken' : "./images/ryuAnims/ryu-hadoken11.gif",
    'bigHaduken' : "./images/ryuAnims/ryu-classic-alpha-super3.gif",
    'win' : "./images/ryuAnims/ryu-sfa-win.gif",
    'lose' : "./images/ryuAnims/ryu-sfa-win.gif"
}

function ryuAttack(turnCount) {
    
    if(turnCount == 1){
        soundPlayer(ryuSounds.punch2)
        player1Gifs.src=ryuAnims.p1
        player1Gifs.style.height = '290px'
        player1ParentGifs.style.marginTop = '210px'
        setTimeout(function(){
            soundPlayer(ryuSounds.punch1)
            player1Gifs.src=ryuAnims.p3
            player1Gifs.style.height = '290px'
            player1ParentGifs.style.marginTop = '210px'

            setTimeout(function(){
                player1Gifs.src=ryuAnims.stance
                player1Gifs.style.height = '300px'
                player1ParentGifs.style.marginTop = '200px'
            }, 680)

        }, 300)   
    }
    if(turnCount == 0){
        soundPlayer(ryuSounds.punch1)
        player1Gifs.src=ryuAnims.kick
        player1ParentGifs.style.paddingRight = "40px"
        player1Gifs.style.height = '285px'
        setTimeout(function(){
            player1Gifs.style.height = '300px'
            player1Gifs.src=ryuAnims.stance
            player1ParentGifs.style.paddingRight = "0px"
        }, 1100)
        
    }
    if(turnCount == 2){
        soundPlayer(ryuSounds.hadouken)
        player1Gifs.src=ryuAnims.haduken
        player1ParentGifs.style.marginTop = "170px"
        player1ParentGifs.style.paddingRight = "40px"
        player1Gifs.style.height = '340px'
        player1Gifs.style.transform = 'scaleX(-1)';
        setTimeout(function(){
            player1ParentGifs.style.marginTop = "200px"
            player1Gifs.style.transform = 'scaleX(+1)'
            player1Gifs.style.height = '300px'
            player1Gifs.src=ryuAnims.stance
            player1ParentGifs.style.paddingRight = "0px"
        }, 790)
        
    }

    if(turnCount == 3){
        soundPlayer(ryuSounds.hadouken2)
        player1Gifs.src=ryuAnims.bigHaduken
        player1Gifs.style.height = '450px'
        player1ParentGifs.style.paddingRight = "210px"
        player1Gifs.style.transform = 'scaleX(-1)';
        player1ParentGifs.style.marginTop = '110px'
        setTimeout(function(){
            player1Gifs.style.transform = 'scaleX(+1)'
            player1ParentGifs.style.marginTop = '200px'
            player1Gifs.style.height = '300px'
            player1Gifs.src=ryuAnims.stance
            player1ParentGifs.style.paddingRight = "0px"
        }, 4300)
    }

    if(turnCount > 3){
        turnCount1 = 0
    }
}

let kenAnims = {
    'stance' : "./images/kenAnims/ken-hdstance.gif",
    'kick1' : './images/kenAnims/ken-sfa-mk.gif',
    'kick2' : './images/kenAnims/sf-ken.gif',
    'haduken' : './images/kenAnims/ken-alphafireball.gif',
    'shryD' : './images/kenAnims/ken-sshinryuken.gif',
    'win' : "./images/kenAnims/kenWins.gif",
    'lose' : './images/kenAnims/ken-loss.gif'
}

function kenAttack(turnCount) {
    //turnCount = 0
    if(turnCount == 0){
        soundPlayer(kenSounds.punch3)
        player2Gifs.src=kenAnims.kick1
        player2ParentGifs.style.marginRight = '170px'
        setTimeout(function(){
            player2ParentGifs.style.marginRight = '0px'
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
        soundPlayer(kenSounds.hadouken)
        player2Gifs.src=kenAnims.haduken
        player2Gifs.style.height = '320px'
        setTimeout(function(){
            player2Gifs.src=kenAnims.stance
            player2Gifs.style.height = '300px'
        }, 900)
    }
    else if(turnCount == 3){
        soundPlayer(kenSounds.shoyuken)
        player2Gifs.src=kenAnims.shryD
        player2Gifs.style.height = '460px'
        player2ParentGifs.style.marginTop = '40px'
        player2ParentGifs.style.marginRight = '145px'
        
        setTimeout(function(){
            player2ParentGifs.style.marginTop = '200px'
            player2ParentGifs.style.marginRight = '0px'
            player2Gifs.src=kenAnims.stance
            player2Gifs.style.height = '300px'
        }, 2000)
    }
    
    console.log(turnCount1)
    if(turnCount1 > 3){
        turnCount1 = 0
    }
}



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
    
    soundPlayer(stageSounds.ko)
    document.getElementById('KOimg').src= "./images/KOMain.gif"
    
    document.querySelector('h2').textContent = "Player " + playermove +" Wins!!!!"
    if(playermove == 1) {
        //player1Gifs.src=ryuAnims.win
        //player2Gifs.src=kenAnims.lose
    }
    else {
        //player1Gifs.src=ryuAnims.lose
        //player2Gifs.src=kenAnims.win
        
    }
}
function declareDraw() {
    document.querySelector('h2').textContent = "Draw! Play Again?"
}

function drawAttack(player) {
    console.log('a')
    if(player === 1) {
        ryuAttack(turnCount1)
        //drawShake(turnCount1, player)
        turnCount1 += 1
    }
    else {
        kenAttack(turnCount2)
        //drawShake(turnCount2)
        turnCount2 +=1
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
        round = round+1
        document.querySelector('h2').textContent = "Round " + round + ": Fight!"
        turnCount1 = 0
        turnCount2 = 0
        document.getElementById('KOimg').src= 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
        player1Gifs.src=ryuAnims.stance
        player2Gifs.src=kenAnims.stance
    }
}

bod.addEventListener('click', main)
bod.addEventListener('click', restart)




