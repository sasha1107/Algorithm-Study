function solution(players, callings) {
    var answer = [];
    const order = {}; 
    // 	{ '0': 'mumu', '1': 'soe', '2': 'poe', '3': 'kai', '4': 'mine' } order
    // 	{ '0': 'mumu', '1': 'soe', '2': 'kai', '3': 'poe', '4': 'mine' } order
    const orderString = {}
    // { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 } orderString
    // { mumu: 0, soe: 1, kai: 2, poe: 3, mine: 4 } orderString
    for (let i = 0; i < players.length; i++){
        order[i] = players[i]
    }
    for (let i = 0; i < players.length; i++){
        orderString[players[i]] = i
    }
    for (let i = 0; i < callings.length; i++){
        const 앞 = orderString[callings[i]] - 1 // 2
        const 뒤 = orderString[callings[i]] // 3
        const 당한자 = order[앞] // soe
        order[앞] = callings[i]
        order[앞 + 1] = 당한자
        orderString[callings[i]] = 앞
        orderString[당한자] = 뒤
    }
    
    return Object.values(order);
}