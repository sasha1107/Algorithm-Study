function solution(hp) {
    // 5먼저 다 넣고 3 많이 넣고 1
    let answer = 0
    while (hp >= 5){
        hp-= 5;
        answer++;
    }
    while (hp >= 3){
        hp-= 3;
        answer++;
    }
    answer += hp
    return answer;
}