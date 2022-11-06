function solution(array, height) {
    return array.sort().filter(i => i > height).length
}