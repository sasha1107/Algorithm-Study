function solution(s) {
    let nextUpper = true;
    const answer = s.split("").map(c => {
        if (c == " ") { 
            nextUpper = true;
            return c;
        }
        if (nextUpper){
            nextUpper = false;
            return c.toUpperCase(); 
        }
        else {
            return c.toLowerCase();
        }
    })
    return answer.join("")
}
