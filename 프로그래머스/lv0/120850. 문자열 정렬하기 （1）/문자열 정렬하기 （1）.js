function solution(my_string) {
    let answer = [];
    my_string.split("").filter(i => i == 0 || Number(i)).sort((a,b) => a-b).forEach(i =>     {
        answer.push(parseInt(i))
    });
    console.log(answer);
    return answer
}