function solution(my_string) {
    return my_string.replaceAll(/[^0-9]/g, '').split('').sort((a,b) => a-b).map(v => +v)
}