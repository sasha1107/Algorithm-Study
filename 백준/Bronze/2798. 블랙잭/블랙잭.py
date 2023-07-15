N, M = list(map(int, input().split()))

cards = list(map(int, input().split()))

results = []

for i in range(N):
    for j in range(i+1, N):
        for k in range(j+1, N):
            results.append(cards[i] + cards[j] + cards[k])

filtered = list(filter(lambda x: x <= M, results))
print(max(filtered))
