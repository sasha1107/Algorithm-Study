coordinate = []

for i in range(3):
    coordinate.append(list(map(int, input().split())))

x = [x[0] for x in coordinate]
y = [x[1] for x in coordinate]

result = []
for i in x:
    if (x.count(i)) == 1:
        result.append(i)
for i in y:
    if (y.count(i)) == 1:
        result.append(i)
print(' '.join(map(str, result)))