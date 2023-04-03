T = int(input())
for i in range(T):
    R, S = input().split()
    R = int(R)
    S = list(S)
    print(''.join([(x * R) for x in list(S)]))