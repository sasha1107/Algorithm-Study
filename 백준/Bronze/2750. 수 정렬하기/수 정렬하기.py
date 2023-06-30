import sys

N = int(input())
inputs = []

for i in range(N):
    inputs.append(int(sys.stdin.readline()))

inputs.sort()
for i in inputs:
    print(i)