import re

N = int(input())
num, cnt = 0,0

while True:
    if re.findall(r'666', str(num)):
        cnt = cnt + 1
        if cnt == N: 
            break
    num = num + 1
print(num)