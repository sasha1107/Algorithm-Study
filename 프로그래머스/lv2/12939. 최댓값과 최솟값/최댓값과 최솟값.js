function solution(s) {
    const numArr = s.split(' ').map(i => ~~i)
    return `${Math.min(...numArr)} ${Math.max(...numArr)}`
}