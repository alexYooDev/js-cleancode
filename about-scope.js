// 함수 스코프 & 블록 스코프에 대하여

var global = 'global';

if (global === 'global') {
  var global = 'local';

  console.log(global); // local : 재선언이 된 값으로 출력
}

console.log(global); // local: 조건문 안에서 값을 재 정의 했음에도, 코드 블럭 밖에서도 영향을 받았음

// var는 함수 스코프이기 때문에, 변경한 부분이 함수 블록이 아니라면 값에 영향을 주는 바뀌는 불안 요소를 가지고 있음

let global1 = 'global';

{
  let global1 = 'local';
  console.log('global1:', global1); // local
}

console.log('global1:', global1); // global

// 블록 단위의 스코프를 지닌 let, const는 변수 다룸에 있어 안전한 코드를 작성할 수 있다.

// let 보단 const, 값의 재할당은 할 수 없지만

const person = {
  name: 'alex',
  age: '27',
};

// 객체 타입의 값의 경우, 즉 참조값의 조작의 경우 가능하다.
person.name = 'Alex';
