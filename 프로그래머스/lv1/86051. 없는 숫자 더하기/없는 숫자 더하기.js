function solution(numbers) {
    const numarr = [0,1,2,3,4,5,6,7,8,9]
    for (let i of numbers){
        if (numbers.indexOf(i) !== -1){
            numarr.splice(numarr.indexOf(i), 1)
        }
    }
    return numarr.reduce((a,c) => a + c)
}