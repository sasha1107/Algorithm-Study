function solution(n) {
    return n % 2 == 0 ? Array(~~(n/2)).fill(0).map((_, index) => index * 2 + 1) : Array(~~(n/2)+1).fill(0).map((_, index) => index * 2 + 1);
}