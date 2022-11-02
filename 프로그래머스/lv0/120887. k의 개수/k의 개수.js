function solution(i, j, k) {
    let arr = Array(j-i+1).fill(0).map((_, index) => index + i);
    return arr.join('').split('').filter(i => i == k ).length;
}