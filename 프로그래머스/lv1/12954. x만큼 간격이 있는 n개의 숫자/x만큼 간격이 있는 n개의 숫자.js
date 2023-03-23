function solution(x, n) {
    let result = Array(n).fill(x);
    return result.map((item, index) => item * (index+1))
}