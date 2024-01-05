function solution(num_list) {
    return ~~(num_list.filter(n => n % 2 === 1).join('')) + ~~(num_list.filter(n => n % 2 === 0).join(''))
}