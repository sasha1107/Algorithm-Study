normal = [1, 1, 2, 2, 2, 8]

input = list(map(int,input().split()))
for i in range(len(normal)):
    input[i] = normal[i] - input[i]

print(' '.join(map(str, input)))