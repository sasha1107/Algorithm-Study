N = int(input())

cases = []

for j in range(N // 3 + 1):
    for i in range(N // 5 + 1):
        if 5 * i + 3 * j == N:
            cases.append(i + j)

if len(cases) == 0:
    print(-1)
else:
    print(min(cases))