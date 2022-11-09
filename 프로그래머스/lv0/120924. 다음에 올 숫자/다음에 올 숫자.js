function solution(common) {
    // 등차수열이라면
    const n = common.length;
    const a = common[0];
    if (common.reduce((a,c) => a + c) == (n * (2 * a + (common[1] - common[0]) * (n-1)) / 2)) {
        return common[common.length -1] + common[1] - common[0]
    }
    else 
        return common[common.length -1] * (common[1] / common[0])

}