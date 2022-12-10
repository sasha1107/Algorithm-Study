function solution(id_pw, db) {
    let data = Object.fromEntries(new Map(db))
    if (!data[id_pw[0]]) return "fail";
    return data[id_pw[0]] === id_pw[1] ? "login" : "wrong pw";
}