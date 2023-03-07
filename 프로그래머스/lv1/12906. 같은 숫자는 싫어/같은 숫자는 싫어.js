function solution(arr)
{
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if (i > 0 && arr[i-1] ===  arr[i]){
            
        }
        else {
            newArr.push(arr[i])
        }
    }
    return newArr;
}