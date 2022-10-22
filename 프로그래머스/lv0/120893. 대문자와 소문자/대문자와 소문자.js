function solution(my_string) {
    result = [];
    my_string.split('').forEach(i => {
        if (i.match(/[A-Z]/)) {
             result.push(i.toLowerCase());
        }
        else if (i.match(/[a-z]/)) {
            result.push(i.toUpperCase());
        }
    })
    return result.join('');
}