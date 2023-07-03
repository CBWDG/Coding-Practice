function solution(numbers) {
    let answer = 0;
    let result;
    for(let i = 0; i < numbers.length; i++) {
        answer += numbers[i]
    }
    result = 45 - answer;
    return result;
}