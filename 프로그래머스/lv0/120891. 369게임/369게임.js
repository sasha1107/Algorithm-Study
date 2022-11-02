function solution(order) {
    return String(order).split('').filter(i => i.match(/[369]/)).length
}