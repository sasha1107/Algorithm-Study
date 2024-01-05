function countOne(n) {
    return n.toString(2).replaceAll('0', '').length
}
function solution(n) {
    let next = n + 1
    while (countOne(n) !== countOne(next)) {
        next++;
    }
    return next;
}