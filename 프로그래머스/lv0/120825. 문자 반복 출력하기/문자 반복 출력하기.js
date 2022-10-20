function solution(my_string, n) {
    let result = '';
    my_string.split("").forEach(i => {
        result += i.repeat(n)
    })
    return result;
}