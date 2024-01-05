function solution(n, k) {
    return Array(n).fill(0).map((_, i) => i + 1).filter(n => n % k === 0)
}