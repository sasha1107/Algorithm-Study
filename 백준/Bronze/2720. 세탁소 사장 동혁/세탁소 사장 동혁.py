T = int(input())

for i in range(T):
	Q, D, N, P = 0, 0, 0, 0
	C = int(input())
	Q, C = divmod(C, 25)
	D, C = divmod(C, 10)
	N, P = divmod(C, 5)
	print('{} {} {} {}'.format(Q, D, N, P))