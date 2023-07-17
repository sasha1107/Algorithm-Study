import math

N = int(input())

def get_base(num):
    if (num == 0):
        return 1
    return math.pow(2, num) + get_base(num-1)

print('%d' % (math.pow(get_base(N - 1) + 2 ,2)))