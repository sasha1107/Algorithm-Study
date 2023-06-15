function swapKeysAndValues(obj) {
  const swapped = Object.entries(obj).map(
    ([key, value]) => [value, key]
  );
  return Object.fromEntries(swapped);
}
function solution(players, callings) {
    const ranking = {}; 
    for (let i = 0; i < players.length; i++){
        ranking[i] = players[i]
    }
    const swappedRanking = swapKeysAndValues(ranking)
    for (let i = 0; i < callings.length; i++){
        const front = swappedRanking[callings[i]] - 1
        const back = front + 1
        const passed = ranking[front]
        ranking[front] = callings[i]
        ranking[back] = passed
        swappedRanking[callings[i]] = front
        swappedRanking[passed] = back
        
    }
    
    return Object.values(ranking);
}