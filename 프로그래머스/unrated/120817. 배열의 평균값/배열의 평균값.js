function solution(numbers) {
    var answer = 0;
    for (i of numbers){
        answer += i;
    }
    answer /= numbers.length;
    return answer;
}