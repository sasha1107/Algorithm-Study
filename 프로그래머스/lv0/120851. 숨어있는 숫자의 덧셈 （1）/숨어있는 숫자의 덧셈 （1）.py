import re

def solution(my_string):
    return sum(int(n) for n in re.sub('[^1-9]', '', my_string))