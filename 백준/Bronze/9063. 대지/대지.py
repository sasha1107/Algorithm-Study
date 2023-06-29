N = int(input())

inp = []
for i in range(N):
    inp.append(list(map(int, input().split())))
xPos = [x[0] for x in inp]
yPos = [y[1] for y in inp]
xStart = min(xPos)
xEnd = max(xPos)
yStart = min(yPos)
yEnd = max(yPos)

if (N == 1):
    print(0)
else:
    print((xEnd - xStart) * (yEnd - yStart))
