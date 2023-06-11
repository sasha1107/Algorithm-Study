N, M = list(map(int, input().split()))
A, B, C = [], [], []

for i in range(N):
    A.append(list(map(int, input().split()))) # A 행렬

for i in range(N):
    B.append(list(map(int, input().split()))) # B 행렬

for i in range(N):
    row = []
    for j in range(M):
        row.append(A[i][j] + B[i][j])
    C.append(row)

for i in C:
    print(' '.join(map(str, i)))
