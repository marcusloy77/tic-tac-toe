var bod = document.querySelector('body')

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

playermove = 1


function evalBoard(board, playermove) {
    switch(board.lastMove){
        case "":
            return false

        case "1a":
            console.log("1a case")
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


function red(event){
    if(event.target.classList.contains('square')){
        //checking if move is legal, adding move to board
        if(legalMove(board, event.target.id)){
            board[event.target.id] = playermove
            board["lastMove"] = event.target.id
            if(playermove == 1){
                event.target.textContent = 'X'
            }
            else {
                event.target.textContent = 'O'
            }
            
            if(evalBoard(board, playermove)){
                console.log(board)
                console.log("player " + playermove + " wins!!!")
            }
            

            //switching players
            if(playermove == 1){
                playermove = 2
            }
            else{
                playermove = 1
            }
        }

        console.log(event.target.id)
    }
    
}

bod.addEventListener('click', red)