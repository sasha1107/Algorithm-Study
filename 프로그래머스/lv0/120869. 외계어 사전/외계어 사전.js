function solution(spell, dic) {
    const pattern = "[^" + spell.join('') + "]";
    const reg = new RegExp(pattern,"g");
    let newDic = [];
    for (const item of dic) {
        newDic.push(item.replace(reg, '').split('').sort().join(''))
    }
    return newDic.includes(spell.sort().join('')) ? 1 : 2
}