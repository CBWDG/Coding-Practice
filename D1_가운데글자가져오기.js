function solution(s) {
    let answer;
    let word = s.length;
    
    if (word % 2 === 1) {
        answer = s[Math.floor(word / 2)];
    }
    else {
        
        answer = s[word / 2 - 1] + s[word / 2];
    }
    return answer;
}