function solution(participant, completion) {
    const obj = {}; // 배열, 오브젝트, 함수 즉 참조형 변수를 사용할 땐 const로 선언

    for (let i = 0; i < participant.length; i++) {
        let Pmember = participant[i]; // i에 받으면 계속 숫자가 출력되니까 i에 
        // participant 요소를 부여하고 이 값을 Pmember로 선언해서
        // for...of문을 일반적인 for 문으로 변환
        if (obj[Pmember]) {
            obj[Pmember] += 1 
        }
        else {
            obj[Pmember] = 1 // 여기까지 동명이인이면 2
        }
    }

    for (let j = 0; j < completion.length; j++) {
        let Cmember = completion[j];
        obj[Cmember] -= 1 // 겹치면 -1
    }

    for (let value in obj) {  // 이 부분도 일반적인 for문으로 바꿔보려했는데 
        if (obj[value] == 1) {  // 여기는 오류가 계속 나서 일단은 여기까지 했습니다.
            return value
        }
    }
}