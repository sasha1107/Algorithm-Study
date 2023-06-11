function solution(k, score) {
    const award = []
    const answer = []
    score.forEach((item, idx) => {
        if (idx < k){
            award.push(item)
        }
        else {
            if (item > Math.min(...award)){
                award.sort((a,b) => a-b).shift()
                award.push(item)
            }
        }
        answer.push(Math.min(...award))
    })
    return answer
   
}