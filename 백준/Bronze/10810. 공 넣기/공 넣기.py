N, M = list(map(int, input().split()))

bucket = [0 for x in range(N)]
for i in range(M):
    i, j, k = list(map(int, input().split()))
    bucket[i-1 : j] = [k for x in range(j - i + 1)]

print(' '.join(map(str, bucket)))