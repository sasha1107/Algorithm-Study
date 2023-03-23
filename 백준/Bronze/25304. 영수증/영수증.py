total = int(input())
total_count = int(input())
sum = 0
for i in range(total_count):
    price, count = input().split()
    price = int(price)
    count = int(count)
    sum += (price * count)

if (sum == total):
    print("Yes")
else: 
    print("No")