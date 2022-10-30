function solution(box, n) {

    if (Math.floor(box[0] / n) * Math.floor(box[1] / n) > 0){
        if (Math.floor(box[2] / n) > 0){
            return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n);
        }
        else return 0;
    }
    else {
        return 0;
    }
    
}