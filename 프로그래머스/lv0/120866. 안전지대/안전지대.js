function solution(board) {
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board.length; j++){
            if (board[i][j] == 1) {
                if (j-1 >= 0 && board[i][j-1] == "0"){
                    board[i][j-1] = 1
                }
                if (j-1 >= 0 && i-1 >= 0 && board[i-1][j-1] == "0"){
                    board[i-1][j-1] = 2
                }
                if (j-1 >= 0 && i+1 < board.length && board[i+1][j-1] == "0"){
                    board[i+1][j-1] = 2
                }
                if (i+1 < board.length && board[i+1][j] == "0"){
                    board[i+1][j] = 2
                }
                if (i-1 >= 0 && board[i-1][j] == "0"){
                    board[i-1][j] = 2
                }
                if (j+1 < board.length && board[i][j+1] == "0"){
                    board[i][j+1] = 2
                }
                if (j+1 < board.length && i-1 >= 0 && board[i-1][j+1] == "0"){
                    board[i-1][j+1] = 2
                }
                if (j+1 < board.length && i+1 < board.length && board[i+1][j+1] == "0"){
                    board[i+1][j+1] = 2
                }
            }
        }
    }
    return board.map(i => i.filter(v => v == 0).length).reduce((a,c) => a + c)
}