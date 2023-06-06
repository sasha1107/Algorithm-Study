student = [x for x in range(1, 30 + 1)]
homework = []

for i in range(28):
    temp = int(input())
    homework.append(temp)

result = sorted(list(set(student).difference(set(homework))))
print(result[0])
print(result[1])