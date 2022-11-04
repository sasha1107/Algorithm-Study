function solution(s) {
    let arr = s.split(' ');
    while (arr.includes('Z')){
        arr.splice(arr.indexOf('Z') - 1, 2)
    }
    return arr.reduce((a,c) => +a + +c, 0)
}