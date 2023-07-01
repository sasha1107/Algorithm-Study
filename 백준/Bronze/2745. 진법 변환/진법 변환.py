N, B = input().split()

result = 0
dictionary = {str(x): x for x in range(10)}

for i in range(10, 35 + 1):
    dictionary[chr(65 - 10 + i)] = i

for idx, val in enumerate(N):
        result += (int(B) ** (len(N) - idx - 1)) * dictionary[val]

print(result)