function solution(array) {
    const sorted_arr = [...array].sort((a,b) => b-a);
    return [sorted_arr[0], array.indexOf(sorted_arr[0])]
}