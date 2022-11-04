function solution(my_str, n) {
    let arr = my_str.split('');
    let result = [];
    while (arr.length){
        result.push(arr.splice(0, n).join(''))
    }
    return result;
}