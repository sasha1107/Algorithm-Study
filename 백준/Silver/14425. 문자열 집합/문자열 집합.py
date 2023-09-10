import sys

N, M = list(map(int,sys.stdin.readline().split()))

S = []
for _ in range(N):
    S.append(sys.stdin.readline().strip())

words = []

for _ in range(M):
    words.append(sys.stdin.readline().strip())

result = 0

for word in words: 
    if word in S:
        result += 1

print(result)