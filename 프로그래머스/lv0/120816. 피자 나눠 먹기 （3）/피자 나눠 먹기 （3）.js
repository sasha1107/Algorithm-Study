function solution(slice, n) {
    let result = 0;
    while (n > 0){
        result++;
        n -= slice;
    }
    return result;
}