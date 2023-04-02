function isDivisorsEven (num) {
    let divisors = [];
    for (let i=1; i<=num; i++){
        if (num % i == 0){ divisors.push(i) };
    }
    divisors = [...new Set(divisors)];
    return divisors.length % 2 == 0 ? true : false;
}

function solution(left, right) {
    let answer = 0;
    for (let i=left; i<=right; i++){
        isDivisorsEven(i) ? answer += i : answer -= i;
    }
    return answer;
}

