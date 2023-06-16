def isPrime(num):
    if num < 2:
        return False
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

N = int(input())
numbers = list(map(int, input().split()))
cnt = 0

for i in range(N):
    if isPrime(numbers[i]):
        cnt += 1
print(cnt)