function solution(emergency) {
    let copy = emergency.slice().sort((a,b)=> b-a);
    return emergency.map(v => copy.indexOf(v)+1)
}