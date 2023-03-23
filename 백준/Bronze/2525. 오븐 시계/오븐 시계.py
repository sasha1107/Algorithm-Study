A, B = input().split()
A = int(A)
B = int(B)
C = int(input())
B += C

if (B >= 60):
    A += B // 60
    B -= (B // 60) * 60
if (A >= 24):
    A -= 24

print(A, B)
