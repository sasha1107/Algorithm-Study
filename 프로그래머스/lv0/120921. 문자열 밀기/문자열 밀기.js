function solution(A, B) {
    let temp = "";
    let cnt = 0;
    let A_list = A.split('')
    while (cnt < A.length){
        if (A_list.join('') === B){
            return cnt;
        }
        temp = A_list.pop();
        A_list.unshift(temp);
        cnt++
    }
    return -1;
}