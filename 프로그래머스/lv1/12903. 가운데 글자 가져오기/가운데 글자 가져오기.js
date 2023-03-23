function solution(s) {
    return s.length % 2 == 1 ? s[~~(s.length / 2)] : s.split('').slice(~~(s.length / 2) -1, ~~(s.length / 2)+1).join('')
}