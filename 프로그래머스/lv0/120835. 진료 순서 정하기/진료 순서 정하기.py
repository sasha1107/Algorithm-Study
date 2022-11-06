def solution(emergency):
    copy = sorted(emergency, reverse=True)
    return list(map(lambda x: copy.index(x) + 1, emergency))