inp = sorted(list(map(int, input().split())))
if inp[0] + inp[1] > inp[2]:
    print(sum(inp))
else:
    print((inp[0] + inp[1]) * 2 - 1)