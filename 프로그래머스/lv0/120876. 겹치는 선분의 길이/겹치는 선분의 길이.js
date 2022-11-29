function solution(lines) {
    let result = Array(200).fill(0)
    for (item of lines){
        for (let i = item[0]+100 ; i < item[1] + 100 ; i++){
            result[i]++
        }
    }
    return result.filter(i => i >=2).length
}