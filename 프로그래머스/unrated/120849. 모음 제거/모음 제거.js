function isVowel(char){
    if (char === 'a' || char === 'e'|| char === 'i'|| char === 'o'|| char === 'u'){
        return true;
    }
    return false;
}

function solution(my_string) {
    var answer = '';
    for (const i of my_string){
        if (isVowel(i)){
            continue;
        }
        else {
            answer += i;
        }
    }
    return answer;
}