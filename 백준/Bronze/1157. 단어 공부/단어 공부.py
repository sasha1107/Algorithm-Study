from collections import Counter

word = list(input().upper())
dict = Counter(list(word))
max_value = max(list(dict.values()))
max_word = max(dict, key=dict.get)

if (list(dict.values()).count(max_value) > 1):
    print('?')
else:
    print(max_word)