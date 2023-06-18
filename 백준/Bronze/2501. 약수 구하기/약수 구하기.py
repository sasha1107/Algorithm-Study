def get_divisor(num):
    result = []
    for i in range(1, num+1):
        if (num % i == 0):
            result.append(i)
    return result

N, K = list(map(int, input().split()))
if (len(get_divisor(N)) < K):
    print(0)
else:
    print(get_divisor(N)[K-1])