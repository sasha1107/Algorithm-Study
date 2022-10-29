function solution(rsp) {
    let answer = "";
    const cases = ["2", "0", "5"];
    const win = ["0", "5", "2"];
    rsp.split('').forEach(i => {
        answer += win[cases.indexOf(i)];
    })
    return answer;
}