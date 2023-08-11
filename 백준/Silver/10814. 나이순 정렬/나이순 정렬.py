import sys
N = int(sys.stdin.readline())

users = []

for _ in range(N):
    inputs = sys.stdin.readline().split()
    users.append([int(inputs[0]), inputs[1]])

users.sort(key = lambda x:x[0])

for user in users: 
    print('{} {}'.format(user[0], user[1]))