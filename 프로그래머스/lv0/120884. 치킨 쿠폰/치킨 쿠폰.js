function solution(chicken) {
    let coupon = 0;
    let service = 0;
    while(chicken >= 0){
        if (coupon == 10){
            coupon = 1;
            service++;
        }
        else {
            coupon++;
            chicken--;
        }
    }
    return service
}