/*
undefined = 값이 정의 되지 않은 상태
null = 명시적으로 값이 없다는 것을 나타냄
*/

console.log(!null); // true . 값을 반전한다.
console.log(!!null); // false. 값을 boolean으로 형변환

console.log(null === false); // false

console.log(!null === true); // true

console.log(null + 123); // null은 숫자로 0으로 표현된다

let varb;

console.log(typeof varb); // undefined : 값이 할당되지 않은 상태

console.log(undefined + 123); // undefined와 숫자와의 연산에서는 NaN

console.log(!undefined); // 값을 뒤집으면 true로 변환

console.log(undefined == null); // = 값만 비교하면 true

console.log(undefined === null); // 타입까지 비교하면 false 이다.

console.log(!undefined === !null); // 그러나 값을 뒤집으면 true이다.

/* undefined와 null 은 혼란의 여지가 있기 때문에 , 이에 대한 개발자 팀 내부에서
정해진 규칙 즉 컨벤션을 따로 정의하기도 한다.
*/

/* 
undefined => 값이 정의되지 않음, 숫자로 표현하면 NaN, 타입은 undefined 타입이다
null => 값이 없다고 명시적으로 표현, 숫자로 표현하면 0, 타입은 object 타입이다.

혼란의 요소가 있기 때문에 undefined와 null을 활용할 때에는 주의해야 된다.
*/
