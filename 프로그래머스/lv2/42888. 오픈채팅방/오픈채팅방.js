function solution(record) {
    let users = {}
    let result = [];
    for (const i of record){
        const [state, id, nickname] = i.split(' ');
        if (state === "Enter"){
            users[id] = nickname;
        } else if (state === "Change"){
            users[id] = nickname;
        }
    }
    for (const i of record){
        const [state, id, nickname] = i.split(' ');
        if (state === "Enter"){
            result.push(`${users[id]}님이 들어왔습니다.`);
        } else if (state === "Leave"){
            result.push(`${users[id]}님이 나갔습니다.`);
        }
    }
    return result;
    
}

