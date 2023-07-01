while True:
	x = list(map(int, input().split()))
	x.sort()
	if x[0] == 0 and x[1] == 0 and x[2] == 0:
		break
	if x[2] >= x[0] + x[1]:
		print('Invalid')
	elif x[0] == x[1] and x[1] == x[2]:
		print('Equilateral')
	elif x[0] != x[1] and x[0] != x[2] and x[1] != x[2]:
		print('Scalene')
	else:
		print('Isosceles')