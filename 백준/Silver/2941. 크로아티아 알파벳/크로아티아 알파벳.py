import re

croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

word = input()
result = word
for i in croatia:
	result = re.sub(i, '!', result)

print(len(result))