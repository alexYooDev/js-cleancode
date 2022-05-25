/* 
임시 변수 제거 하기

임시변수란?  => 특정 공간에 스코프 안에서 전역 변수 처럼 사용되는 변수
*/

function getElements() {
  // 이 임시 객체도 함수가 커질 수록 전역 공간이나 다름없는 상황이 발생할 수 있다.
  const result = {};

  result.title = document.querySelector('.title');
  result.text = document.querySelector('.text');
  result.value = document.querySelector('.value');

  // DOM 요소를 자바스크립트 객체로 변환
  return result;
}

function getElements() {
  return {
    title: document.querySelector('.title'),
    text: document.querySelector('.text'),
    value: document.querySelector('.value'),
  };

  // 임시 변수나 객체를 조작할 경우, 함수의 단위를 작게 분할 하는 방법도 있지만
  // 이처럼 값을 바로 리턴해버림으로써 부수 작용을 줄일 수 있다.
}

// 추가적인 사항을 넣어야 할 때 안좋은 영향을 끼친다. => 같은 함수를 여러 부분에서 활용할 수 도 있으므로 부수 작용을 줄여야 함

//
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  // 값을 조작
  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;

  return {
    month,
    day,
    hour,
  };
}

// 개선안 : 변경 로직을 바로 리턴하는 형태로 바꾼다

function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.Hours();

  return {
    month: month >= 10 ? month : '0' + month,
    day: day >= 10 ? day : '0' + day,
    hour: hour >= 10 ? hour : '0' + hour,
  };
}

// 이미 생성한 함수를 재활용하여 추가 기능을 덧붙일 수 있다.

// 한가지 역할만 할 수 있는 함수로 추상화 과정을 거치면 재활용할 수 있다.
function getDateTime() {
  const currentDateTime = getDateTime(new Date());

  return {
    month: currentDateTime.month + '분 전',
    day: currentDateTime.day + '분 전',
    hour: currentDateTime.hour + '분 전',
  };
}

// 값을 조작할 수 없도록 하나의 역할만 할 수 있도록 함수를 작성해야 한다.
function genRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max + 1) + min);

  return randomNumber;
}

// 임시변수가 지속적으로 변하고 연산되는 경우, 값을 예측하기 힘들어 진다.

/* 
임시 변수는 값을 예측할 수 없고, 변수를 마구 조작하여 사이드 이펙트가 발생 => 디버깅 및 수정이 어려워진다.

함수는 하나의 역할만 할 수 있도록 작성하고 , 임시변수를 제거하고 최소화 하기 위한 노력이 더 필요하다.

1. 함수를 재사용할 수 있도록 작은 단위 한가지 역할만 하게 하라
2. 바로 값을 반환할 수 있게 작성
3. 고차 함수를 사용하라 (map, filter, reduce)
4. 명령형이 아닌 선언형 프로그래밍 방식으로 코드를 바꾸는 것이 좋음.
*/
