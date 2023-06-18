# 10 * 10 
board = [[0 for x in range(100)] for x in range(100)]
cnt = 0
N = int(input())

for i in range(N):
    x, y = list(map(int, input().split()))
    for i in range(x, x + 10):
        for j in range(y, y + 10):
            board[i][j] = 1

for i in range(100):
    for j in range(100):
        if (board[i][j] == 1):
            cnt += 1
print(cnt)
