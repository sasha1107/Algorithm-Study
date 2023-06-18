def isPrime(num):
    if num < 2:
        return False
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

def get_prime(a, b):
    prime = []
    for i in range(a, b + 1):
        if isPrime(i) == True:
            prime.append(i)
    return prime

M = int(input())
N = int(input())

if (len(get_prime(M,N)) == 0):
    print(-1)
else:
    print(sum(get_prime(M, N)))
    print(get_prime(M, N)[0])