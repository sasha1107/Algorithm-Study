function solution(numbers) {
    const dict = {
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
        "zero" : 0,    
    };
    for (let i in dict) {
        let regex = new RegExp(i, "g");
        numbers = numbers.replace(regex, dict[i]);
    }
    return parseInt(numbers)
}