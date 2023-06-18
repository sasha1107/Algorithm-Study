def is_factor(a,b):
    if (b % a == 0):
        return True
    return False
def is_multiple(a,b):
    if (a % b == 0):
        return True
    return False
def is_neither(a,b):
    if (b % a != 0 and a % b != 0):
        return True
    return False
while True:
    a, b = list(map(int, input().split()))
    if (a == 0 and b == 0):
        break
    if (is_factor(a,b)):
        print('factor')
    elif (is_multiple(a,b)):
        print('multiple')
    elif (is_neither(a,b)):
        print('neither')
