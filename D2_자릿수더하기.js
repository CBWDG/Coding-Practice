//parseInt(string,(여기는 아직 몰라도 될듯))
//parseInt 함수는 첫 번째 인자를 문자열로 변환하고, 그 값을 파싱하여 정수나 NaN을 반환합니다.
//파싱 = 구문 분석?
//split(seperator, limit) seperator 에 빈 ''를 넣으면 문자열로만 나옴

function solution(N) {
    
    let num = N.toString().split(''); // 각 자리로 분해
    let answer = 0; // 정수로 반환
    
    for(let i = 0; i < num.length; i++) {
        answer += parseInt(num[i]); // [i] 의 인자를 받아서 answer와 더한 값을 반환, num의 길이까지 
    
    }
    return answer;
}