function solution(s) {
    if (s[0] == "-"){
        return parseInt(s.split('').splice(0).join(''))
    }
    else {
        return parseInt(s)
    }
}