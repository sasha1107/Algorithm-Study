import re

def solution(my_string):
    my_string = re.sub('[^0-9]', ' ', my_string);
    return sum(int(n) for n in my_string.split())