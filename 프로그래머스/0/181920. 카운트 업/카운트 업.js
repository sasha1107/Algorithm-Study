function solution(start_num, end_num) {
    return Array(end_num - start_num + 1).fill(0).map((_, idx) => idx + start_num)
}