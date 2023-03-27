function solution(absolutes, signs) {
    let nums = []
    for (let i=0; i<absolutes.length; i++){
        signs[i] ? nums.push(absolutes[i]) : nums.push(absolutes[i] * -1)
    }
    return nums.reduce((a,c) => a+c);
}