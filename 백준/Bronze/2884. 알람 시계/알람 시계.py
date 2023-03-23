H, M = input().split()
H = int(H)
M = int(M)
temp = M + 60 * H
temp -= 45

H = temp // 60
M = temp % 60
if (H < 0):
    H += 24;
print(H, M)