function solution(strArr) {
    return strArr.map((str, idx) => {
        return idx % 2 === 1 ? str.toUpperCase() : str.toLowerCase()
    })
}