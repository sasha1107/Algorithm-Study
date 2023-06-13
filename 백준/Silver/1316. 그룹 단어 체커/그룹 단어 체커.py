N = int(input())

words=[]

for i in range(N):
	words.append(input())

def is_group_word(word):
	temp = []
	for i in range(len(word)):
		if i == 0:
			temp.append(word[i])
		else:
			if word[i-1] == word[i]:
				continue
			if word[i] in temp:
				return False
			else:
				temp.append(word[i])		
	return True
	
cnt = 0	

for word in words:
	if (is_group_word(word)):
		cnt += 1
 
print(cnt)