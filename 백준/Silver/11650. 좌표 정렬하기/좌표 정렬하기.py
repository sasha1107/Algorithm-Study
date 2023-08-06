import sys
N = int(sys.stdin.readline())

coordinates = []

for _ in range(N):
    coordinates.append(list(map(int,sys.stdin.readline().split())))

coordinates.sort(key = lambda x:(x[0], x[1]))

for coordinate in coordinates: 
    print('{} {}'.format(coordinate[0], coordinate[1]))