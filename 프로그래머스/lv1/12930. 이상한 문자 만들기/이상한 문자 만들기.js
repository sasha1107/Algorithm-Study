function solution(s) {
    let words = s.split(' ');
    let answer = [];
    words.forEach(item=> {
        let word = [];
        for (let i=0; i<item.length; i++){
            i % 2 == 0 ? word.push(item[i].toUpperCase()) : word.push(item[i].toLowerCase())
        }
        answer.push(word.join(''))
    })
    return answer.join(' ')
}