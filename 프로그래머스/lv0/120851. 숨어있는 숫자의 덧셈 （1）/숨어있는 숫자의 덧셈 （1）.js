function solution(my_string) {
    return my_string.replaceAll(/[^0-9]/g, '').split('').reduce((a,c) => +a + +c)
}