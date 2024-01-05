function solution(n) {
    return n % 2 === 1 ? Array(n + 1).fill(0).map((_,i) => i).filter(i => i % 2 === 1).reduce((a, c) =>  +a + c, 0) : Array(n + 1).fill(0).map((_,i) => i).filter(i => i % 2 === 0).reduce((a, c) =>  +a + c ** 2, 0)
}