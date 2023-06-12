board = []
max_num = 0;
max_index = [0, 0];
for i in range(9):
    board.append(list(map(int, input().split())))

for i in range(9):
    for j in range(9):
        if board[i][j] >= max_num:
            max_num = board[i][j]
            max_index[0], max_index[1] = [i + 1, j + 1]
print(max_num)
print(max_index[0], max_index[1])