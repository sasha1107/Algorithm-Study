function solution(numbers, k) {
  let current = 0;
  for (let i = 0; i < k - 1; i++){
      current = (current + 2) % numbers.length;
  } 
  return numbers[current];
}
