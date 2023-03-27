function solution(x) {
    return x % x.toString().split('').reduce((a,c) => +a + +c) === 0 ? true : false;
}