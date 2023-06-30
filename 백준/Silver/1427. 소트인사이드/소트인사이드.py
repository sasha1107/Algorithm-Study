N = input()
result = list(map(int, list(N)))
result.sort(reverse=True)
print(''.join(list(map(str, result))))