function solution(s1, s2) {
    let set_s1 = new Set(s1);
    let set_s2 = new Set(s2);
    let cro = [...set_s1].filter(value => set_s2.has(value));
    // console.log(cro)
    return cro.length;
}