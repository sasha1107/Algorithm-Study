function solution(array, n) {
    let result = {}
    array.sort((a,b) => a-b);
    array.forEach(i => {
        result[i] = Math.abs(i-n);
    })
    return ~~Object.keys(result)[Object.values(result).indexOf(Math.min(...Object.values(result)))]


}