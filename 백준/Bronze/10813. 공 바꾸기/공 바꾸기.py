N, M = list(map(int, input().split()))

bucket = [ x for x in range(1, N+1) ]
for i in range(M):
    i, j = list(map(int, input().split()))
    bucket[i-1], bucket[j-1] = bucket[j-1], bucket[i-1]

print(' '.join(map(str, bucket)))