def isPrime(num):
    if num < 2:
        return False
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

N = int(input())

num = N
i = 2
if (isPrime(N) == True):
    print(N)
elif (N != 1):
    while True:
        if (num == 0 or i == N):
            break
        if (num % i == 0):
            print(i)
            num //= i
        else:
            i += 1