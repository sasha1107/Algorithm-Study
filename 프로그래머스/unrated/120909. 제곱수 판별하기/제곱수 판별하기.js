function solution(n) {
    var answer = 0;
    for (let i=1; i <= Math.sqrt(n); i++) {
        if (i ** 2 === n){
            return 1;
        }
    }
    return 2;
}