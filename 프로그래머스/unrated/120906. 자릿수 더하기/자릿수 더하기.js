function solution(n) {
    var answer = 0;
    String(n).split('').forEach(i => answer += parseInt(i))
    return answer;
}