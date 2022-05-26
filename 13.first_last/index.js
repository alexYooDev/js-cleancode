/* 
포함된 양 끝을 의미
 ~~ 부터 ~~ 까지

연속성이 없고 규칙성이 없는 범위
*/

const student = ['alex', 'justin', 'claire'];

function getStudents(first, last) {
  // 동작하는 코드
}

// 순서와 연속성을 보장하지 않는다.
getStudents(student[0], student[student.length - 1]);
