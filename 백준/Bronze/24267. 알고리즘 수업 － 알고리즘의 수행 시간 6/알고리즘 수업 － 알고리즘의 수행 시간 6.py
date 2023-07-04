n = int(input())

answer = 0
for i in range(1, n-1):
    answer += i * (n-1-i)

print(answer)
print(3)