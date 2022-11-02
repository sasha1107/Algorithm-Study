function solution(my_string) {
    let result = new Set(my_string.split(''));
    return Array.from(result).join('')
}