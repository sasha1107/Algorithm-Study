function solution(my_string) {
    let sum = 0;
    let answer = 0;
    answer = my_string.split('').filter(i => parseInt(i)).reduce((sum,i) => {
        return parseInt(sum) + parseInt(i);
    });
    return answer;
}