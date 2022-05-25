/* 피연산자의 타입을 평가하여 결과를 문자열로 반환한다 */
/* 원시 타입 값은 불변성을 지닌다. 원시 타입 값은 typeof 연산자로 확인할 수 있다 */
typeof 'string';
typeof true;
typeof undefined;
typeof 123;
typeof Symbol();

// 원시타입 값 vs 참조타입 값

function myFunction() {}
// 생성자 함수의 문법 슈거 이기 때문에 function 타입으로 나옴
class Class {}

// Wrapper 객체로 생성 => 객체라는 결과??
const str = new String('문자열');

console.log(typeof str);

typeof null; // object 객체?? 자바스크립트의 언어적인 오류이다. (수정할 수 없다고 판단하여 남겨진 오류)

// 자바스크립트는 동적 타이핑 언어이기 때문에 타입 또한 동적으로 결정된다. (값의 초기화 등)

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = {
  name: 'test',
  age: 30,
};

const alex = new Person('alex', '27');

// 객체의 프로토타입 체인을 검사

alex instanceof Person; // true

p instanceof Person; // false

const arr = [];
const func = function () {};
const date = new Date();

// 프로토타입 체인을 타고 최상위로 가면 결국 object 타입이다
arr instanceof Object;
func instanceof Object;
date instanceof Object;

// 객체 타입의 정확한 타입을 검사할 수 있음
console.log(Object.prototype.toString.call(func));

/* 
자바스크립트는 동적으로 타입이 지정되어 타입 검사가 어렵다

타입 검사를 할 때에는 여러 방법을 찾고 신중하게 해야 한다.
*/
