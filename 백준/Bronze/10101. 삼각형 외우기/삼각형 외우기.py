degrees = []

for i in range(3):
    degrees.append(int(input()))


if (sum(degrees) != 180):
    print('Error')
else:
    if degrees[0] == degrees[1] and degrees[1] ==  degrees[2]:
        print('Equilateral')
    elif degrees[0] != degrees[1] and degrees[1] != degrees[2] and degrees[0] != degrees[2]:
        print('Scalene')
    else:
        print('Isosceles')