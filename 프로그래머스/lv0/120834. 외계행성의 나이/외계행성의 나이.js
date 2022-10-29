function solution(age) {
    var answer = '';
    const alpha = "abcdefghij";
    const digit = "0123456789";
    String(age).split('').forEach(i=>{
        answer += alpha[digit.indexOf(i)]
    })
    return answer;
}