n = int(input())
numbers = map(int, input().split())
v = int(input())
def func(n):
    if n == v: 
        return True 
    return False
print(len(list(filter(func, numbers))))