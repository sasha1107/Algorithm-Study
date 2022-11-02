function solution(cipher, code) {
    return cipher.split('').filter((element, index) =>{
        return (index + 1) % code == 0;
    }).join('');
}