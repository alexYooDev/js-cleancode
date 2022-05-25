// var 키워드를 지양해야 하는 이유

// var 함수 스코프, let const  블록 스코프 (ES2015), TDZ 속성 => 코드를 안전하게 작성할 수 있다.

var name = 'name';
// var 키워드로 완전히 동일한 식별자로 생성해도 선언이 가능하다
var name = 'name2';

var name = 'name3';
var name = 'name3';

// 마지막으로 선언한 변수의 값을 출력
console.log(name);

// => 이런 식으로 재선언이 가능한 경우, 코드의 규모가 커질 수록 예기치 못한 에러가 발생할 가능성이 높음

// 이미 같은 식별자로 선언한 변수는 사용할 수 없다는 에러를 발생
let name1 = 'name';
let name1 = 'name1';

// let : 같은 변수에 대해 재할당이 가능 , const 의 경우엔 재할당은 불가능 하다. (선언 후 초기화까지 한번에 적용된다)
