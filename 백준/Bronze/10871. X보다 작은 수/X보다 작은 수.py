n, x = map(int, input().split())
nums = map(int, input().split())

def func(n):
    if n < x: 
        return True 
    return False
print(*list(filter(func, nums)))