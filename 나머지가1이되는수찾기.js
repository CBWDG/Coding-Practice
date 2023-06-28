function solution(n) {
    for(let x = 2; x < 1000000; x++) {
        if(n % x === 1) {
            return x
        }
      else {
          console.log("범위를 벗어났습니다!!")
        }
    }
}