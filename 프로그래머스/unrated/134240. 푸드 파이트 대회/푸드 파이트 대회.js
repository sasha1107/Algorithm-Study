function solution(food) {
    return food.map((num, index)=>{
        if(!index) return
        if(num % 2 === 0) {
            return String(index).repeat(num/2)
        }
        return String(index).repeat(num/2)
    }).filter((v)=>{
        return v
    }).map((v,index,array)=>{
        if(index !== array.length-1) return
                
        const aaa = [...array]
        aaa.reverse()
        aaa.unshift("0")

        return [array.join("") + aaa.join("")]        
    }).join("")
    
    
        
}