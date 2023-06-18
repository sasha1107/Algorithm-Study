// 빵야채고기빵 1231
function solution(ingredient) {
    const stack = []
    let cnt = 0
    let idx = 0
    for (const item of ingredient){
        idx++
        // console.log(stack)
        stack.push(item)
        if (!!stack && stack.slice(-4).join('') === '1231'){
            stack.splice(-4)
            cnt++
        }
        if (idx === ingredient.length - 1 && stack.slice(-4).join('') === '1231') {
            cnt++
        }
    }
    return cnt
}