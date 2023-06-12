def solution(s, n):
    answer = []
    for i in list(s):
        if i == ' ':
            answer.append(' ');
        else:
            if ((i.isupper() and ord(i) + n > ord('Z')) or (i.islower() and ord(i) + n > ord('z'))):
                temp = ord(i) + n - 25 - 1
            else:
                temp = ord(i) + n 
            answer.append(chr(temp))
    return ''.join(answer)