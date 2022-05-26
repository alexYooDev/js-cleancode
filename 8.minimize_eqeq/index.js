/* 
eqeq => == 의 느슨한 동등 연산자 
eqeqeq === => 엄격한 동등 연산자
*/

console.log(1 == '1'); // 타입 캐스팅이 발생 (형변환)
console.log(1 == true); // 타입 캐스팅이 발생 (형변환)

/* 
타입 캐스팅으로 인한 예상치 못한 동작과 에러를 피하기 위해, 명시적으로 형변환하는 노력이 필요하다
Number(), parseInt() ,toString() 등등
*/
