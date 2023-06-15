function solution(name, yearning, photo) {
    var answer = [];
    const map = {}

    for(let i = 0; i < name.length; i++) {
        map[name[i]] = yearning[i]
    }
    photo.forEach((item) => {
        const temp = []

        item.forEach((person)=>{
            if(Object.keys(map).includes(person)) {
                temp.push(map[person])
            }
        })

        if(temp.length) {
            answer.push(temp.reduce((a,c) => +a+c))
        }
        else {
            answer.push(0)
        }
        console.log(answer)
    })
    return answer;
}
