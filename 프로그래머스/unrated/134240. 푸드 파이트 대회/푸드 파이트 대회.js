function solution(food) {
    return food.map((n, i)=>{
        if(!i) return
        return (i+"").repeat(n/2)
    }).filter(v=> v).map((v,i,arr)=>{
        if(i !== arr.length-1) return

        const copied = [...arr]
        copied.reverse().unshift("0")

        return [arr.join("") + copied.join("")]        
    }).join("")
}