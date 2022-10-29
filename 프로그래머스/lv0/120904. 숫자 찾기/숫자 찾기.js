function solution(num, k) {
    let arr = String(num).split('');
    if (arr.indexOf(String(k)) === -1){
        return -1;
    }
    else {
        return arr.indexOf(String(k)) +1;
    }
}