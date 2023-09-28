def solution(array, commands):
    result = []
    for command in commands:
        i, j, k = command
        sliced_arr = array[i-1:j]
        sliced_arr.sort()
        result.append(sliced_arr[k-1])
    return result