/* 
전역 공간 : global scope를 최소화 해야 하는 이유란?

브라우저 환경의 경우 : window가 최상위 전역 공간
서버 환경의 경우 : global이 최상위 전역 공간
*/

// console.log(window); // node 환경에서는 접근 불가, 브라우저에서는 접근할 수 있다.

// console.log(global); // node.js 환경에서 최상위 전역 환경으로 접근 가능

var globalVar = 'global';

// 전역 공간에 var 변수로 정의로 하면 스코프가 나뉘지 않는다

// setTimeout과 같은 API는 WEB API이기 때문에, 런타임 이전에는 에러의 개입이 없어 문제를 찾기 어려움
var setTimeout = '';

const arr = [1, 2, 3, 4, 5];

// for문에서 var를 사용함에도 window 공간에서 접근할 수 있게 된다.
for (var i = 0; i < arr.length; i++) {
  const element = arr[i];
}

// 전역 공간에서 어디서나 접근 가능하게 될 수 있어 전역공간을 더럽힌다.
window.foo = 'bar';

/*
예방 방안
IIFE (즉시 실행 함수식)
Closure 
let const
*/
