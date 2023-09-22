import re


def solution(s):
    words = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    for word in words:
        s = re.sub(word, str(words.index(word)), s)
    return int(s)