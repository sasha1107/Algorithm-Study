function solution(n) {
    let answer = 1;
    while (n >= factorial(answer)){
        answer++;
        if (n == factorial(answer)){
            answer++;
            break;
        }
    }
    
    return answer-1;
}

function factorial(num){
    if (num == 1){
        return 1;
    }
    return num * factorial(num-1);
}
