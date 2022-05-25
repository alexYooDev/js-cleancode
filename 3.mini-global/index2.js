// 다른 파일내에 정의한 변수임에도 전역공간을 통해 접근이 된다...
console.log(globalVar);

window.setTimeout(() => {
  console.log('1초 후');
}, 1000);

window.setTimeout(() => {
  console.log('1초 후');
}, 1000);
