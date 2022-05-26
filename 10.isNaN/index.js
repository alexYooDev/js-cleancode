/* 
사람이 생각하는 숫자 => 10진수의 수
컴퓨터가 생각하는 숫자 => 2진수 

이 간극이 크게 작용하는 부분은 소수점이다.

자바스크립트에서는 IEEE 754 표준을 사용하는데 컴퓨터에서 부동소수점을 표현하는 방식이다. 
부동소수점 (floating point) 떠돌이 소수점
*/

Number.MAX_SAFE_INTEGER; // 자바스크립트로 표현할 수 있는 가장 큰 수

Number.isInteger; // 자바스크립트의 숫자 값이 정수인지 확인하는 메서드

isNaN; // 자바스크립트에서 숫자임을 판별하는 것이 어려움을 보여준다. 숫자가 아님을 뜻함

console.log(isNaN(123)); // 숫자가 아닌 것이 아니다 => 숫자이다 : 헷갈리는 판별

Number.isNaN(123 + 'number'); // false
isNaN(123 + 'number'); // true

isNaN; // 느슨한 검사
Number.isNaN; // ES2015 부터 엄격한 검사를 지원한다.
