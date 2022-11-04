function solution(s) {
    let char = [...new Set(s.split(''))].sort();
    let result = "";
    char.forEach(item => {
        if (s.split('').filter(i => i == item).length == 1){
            result += item;
        }
    })
    return result;
}