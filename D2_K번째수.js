// arr.slice([begin[, end]])
// Array.map // map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
function solution(array, commands) {
    let answer = [];
    
    for(let i = 0; i < commands.length; i++) {
        let sliceArr = array.slice(commands[i][0]-1, commands[i][1]);
        sliceArr.sort(); //정렬 문제
        answer.push(sliceArr[commands[i][2]-1]);
    }
    return answer;
}

// 나중에 혼자서 설명해보기