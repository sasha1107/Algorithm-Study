function solution(s){
    const count_p = s.toLowerCase().split('').filter(i => i == 'p').length;
    const count_y = s.toLowerCase().split('').filter(i => i == 'y').length;
    return count_p === count_y ? true : false;
}