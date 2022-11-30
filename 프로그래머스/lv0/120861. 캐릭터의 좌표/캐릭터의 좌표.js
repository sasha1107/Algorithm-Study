function solution(keyinput, board) {
    let gameBoard = [];
    for (let i = 0; i < board[1]; i++){
        gameBoard.push(Array(board[0]).fill(0))
    }
    // console.log(gameBoard)
    // console.log(parseInt(board[0] /2))
    // console.log(parseInt(board[1] /2))
    let posX = parseInt(board[0] /2);
    let posY = parseInt(board[1] /2);
    for (let key of keyinput){
        if (key == "down" && posY-1 >=0){
            posY--;
        }
        if (key == "up" && posY+1 < board[1]){
            posY++;
        }
        if (key == "left" && posX-1 >= 0){
            posX--;
        }
        if (key == "right" && posX+1 < board[0]){
            posX++;
        }
    }
    return [posX-parseInt(board[0] /2), posY-parseInt(board[1] /2)]
}