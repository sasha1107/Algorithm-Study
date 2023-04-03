num_arr = []
for i in range(9):
    n = int(input())
    num_arr.append(n)
max_num = max(num_arr)
print(max_num)
print(num_arr.index(max_num)+1)