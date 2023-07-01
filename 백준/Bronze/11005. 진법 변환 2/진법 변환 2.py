N, B = list(map(int,input().split()))
dictionary = {x: str(x) for x in range(10)}

mod = []
for i in range(10, 35 + 1):
    dictionary[i] = chr(65 - 10 + i)

while True:
    if N < B:
        mod.append(N % B)
        break
    mod.append(N % B)
    N //= B
print(''.join([dictionary[x] for x in reversed(mod)]))