function solution(sides) {
    let answer = [];
    sides.sort((a,b) => a-b);
    // 가장 긴 변이 sides[1]인 경우
    for (let i=1; i <= sides[1]; i++){
        if (sides[1] - sides[0] < i){
            answer.push(i)
        }
    }
    // sides[1] < sides[0] + x
    // x <= sides[1]
    
    // 가장 긴 변이 x인 경우
    for (let j=sides[1]+1; j < sides[0] + sides[1]; j++){
        if (j < sides[0] + sides[1]){
            answer.push(j)
        }
    }
    // x < sides[0] + sides[2]
    // x >= sides[1]
    return new Set(answer).size;
}