/* 호이스팅 => 간단히 말하면 런타임(코드의 동작 시) 시 선언과 할당이 분리된 것을 뜻한다

개발자가 코드를 작성할 때는 스코프를 예상하여 코드가 예상대로 작동할 것이라 생각하나, 런타임 시에서 호이스팅에 의해
예상치 못한 동작을 할 수 있다.

호이스팅: var로 선언한 변수가 초기화가 제대로 되어 있지 않을 때, undefined로 최상단으로 끌어올려질 수 있는 것
선언부만 최상단으로 올려진다.
 */

var global = 0;

function outer() {
  // var global;
  // console.log(global)
  // global =10; 과 같다
  //
  // 메모리 공간을 선언전에 미리 할당하여 =>  undefined를 할당하기 때문에 발생한다.
  console.log(global); // undefined (선언과 할당이 분리되서 발생 )
  var global = 10;

  function inner() {
    var global = 10;
    console.log(global); // 10 (재선언 된 값)
  }

  inner();

  global = 1;

  console.log(global); // 1 (재할당)
}

outer();

//1. 값이 끌어올려져 값을 파악하기 힘들다

function duplicatedVar() {
  var a;

  console.log(a); // undefined

  var a = 100;

  console.log(a); // 100
}

console.log(duplicatedVar()); // undefined

// 2.

var sum;

sum = function () {
  return 1 + 2;
};

console.log(sum()); // 3

// -----

var sum;

// 함수 선언문의 경우, 함수가 변수를 덮어 씀으로 함수가 호이스팅 된다
console.log(sum());

function sum() {
  return 1 + 2;
}

// 함수 표현식을 만들 때에는 const 키워드를 통해 할당하여 사용하면 호이스팅 관련 에러를 방지할 수 있다.

/* 
호이스팅 : 런타임 시 선언부가 최상단으로 끌어올려지는 현상

선언과 초기화 부분이 분리되어 있기 때문에, 실행 컨텍스트에 의해 런타임 이전 선언이 가장 먼저 이루어지므로 초기화 되지 않은 값
 undefined를 갖게 된다.

예측할 수 없는 에러가 실행 시 발견된다

1. var 키워드를 지양하고 , let , const 키워드 사용
2. 함수 표현식을 사용하고 const 키워드를 통해 작성하라

*/
