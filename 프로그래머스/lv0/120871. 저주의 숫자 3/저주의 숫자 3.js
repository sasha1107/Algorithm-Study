function solution(n) {
    return Array(2 * n).fill(1).map((i, _) => i + _).filter(v => v % 3 !== 0 && String(v).search('3') == "-1")[n-1]

}