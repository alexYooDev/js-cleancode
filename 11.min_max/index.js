/* 
경계 다루기
min max 


1. 최소와 최대값을 명확히 다룬다
2. 최소와 최대값의 포함여부를 결정 (이상 , 이하 혹은 초과 미만)
3. 변수의 이름을 지을 때 최소값과 최대값을 (포함여부 )유추할 수 있도록 표현한다.
*/

function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 상수 (일정하고 변하지 않는 수) 를 설정하여 파악하기 쉽게 한다.
const MIN_NUM = 1;
const MAX_NUM = 45;

console.log(genRandomNumber(MIN_NUM, MAX_NUM)); // 함수의 구현부를 보지 않아도, 동작을 명시적으로 유추할 수 있다.

const MAX_AGE = 20;

function isAdult(age) {
  // 최소, 최대값이 포함되는 지 아닌지를 확실히 하는 것이 중요
  if (age >= 20) {
    console.log('you are an adult');
  }
}
