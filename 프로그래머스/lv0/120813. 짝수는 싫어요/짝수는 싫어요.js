function solution(n) {
    return Array(n).fill(0).map((_, index) => index + 1).filter(i => i % 2 == 1)
}