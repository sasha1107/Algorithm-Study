C = int(input()) # 테스트 케이스의 개수
for i in range(C):
    inp_line = list(map(int, input().split())) # 점수
    N = inp_line[0] # 학생 수
    score = inp_line[1:] # N명의 점수
    cnt = 0
    for j in score: 
        if j > sum(score) / N:
            cnt += 1
    result = float(cnt) / float(N) * 100
    print("%0.3f%%" % result)