def get_divisor(num):
    result = []
    for i in range(1, num):
        if (num % i == 0):
            result.append(i)
    return result

while True:
    num = int(input())
    if (num == -1):
        break
    if (sum(get_divisor(num)) == num):
        print('{} = '.format(str(num)) + ' + '.join(map(str,get_divisor(num))))
    else:
        print('{} is NOT perfect.'.format(num))