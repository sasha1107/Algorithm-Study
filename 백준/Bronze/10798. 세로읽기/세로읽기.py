board = []
for i in range(5):
	board.append(list(input()))

result = ''
max_len = max([len(x) for x in board])

for j in range(max_len):
	for i in range(5):
		try:
			result += board[i][j]
		finally:
			continue
	
print(result)