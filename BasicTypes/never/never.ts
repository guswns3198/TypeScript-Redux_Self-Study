function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('failed');
}

function infiniteLoop(): never {
  while (true) {}
}

// 아래는 잘못된 타입을 넣는 실수를 막는 예제

let a: string = 'hello';

if (typeof a !== 'string') {
  a; // a의 타입은 never
}

declare const b: string | number;

if (typeof b !== 'string') {
  b; // b의 타입은 number
 }