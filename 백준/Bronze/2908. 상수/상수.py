a,b = input().split()
a_list=list(a)
a_list.reverse()
b_list=list(b)
b_list.reverse()
if(a_list > b_list):
    print(''.join(a_list))
else:
    print(''.join(b_list))