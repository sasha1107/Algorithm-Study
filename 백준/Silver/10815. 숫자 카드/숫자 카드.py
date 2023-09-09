import sys

N = int(sys.stdin.readline())

my = set(map(int,sys.stdin.readline().split()))

M = int(sys.stdin.readline())

cards = list(map(int,sys.stdin.readline().split()))

result = []
for card in cards:
    if my.__contains__(card):
        result.append('1')
    else:
        result.append('0')

print(' '.join(result))