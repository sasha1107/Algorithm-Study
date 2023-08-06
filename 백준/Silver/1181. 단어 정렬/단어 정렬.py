import sys
from functools import reduce

N = int(sys.stdin.readline())

words = []

for _ in range(N):
    words.append(sys.stdin.readline().strip())

words.sort(key = lambda x:(len(x), x))

# 중복제거
result = reduce(lambda acc, cur: acc if cur in acc else acc+[cur], words, [])

for word in result: 
    print(word)