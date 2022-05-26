console.log(11 + ' combined with string'); // string 으로 문자열로의 암묵적 형변환

console.log(!!'string'); // boolean true로의 암묵적 형변환

console.log(!!''); // boolean false로 암묵적 형변환

console.log(parseInt('9.999', 10)); // 10 진수로 지정하여 명시적 형변환

/* 
명시적 형변환을 할 때에는 Wrapper 객체를 통해 형변환을 하거나 내장 메서드를 통해 할 수 있다
암묵적인 형 변환 보다는 명시적으로 형변환을 하는 것을 지향해야 한다.
*/
