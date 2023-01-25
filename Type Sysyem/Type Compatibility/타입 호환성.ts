// 공변
// 같거나 서브 타입인 경우 할당이 가능함

let small: string = '';
let big: string | number = small; // primitive type

let small2: { a: string; b: number } = { a: '', b: 1 };
let big2: { a: string | number; b: number } = small2; // object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 함

let small3: Array<{ a: string; b: number }> = [{ a: '', b: 1 }];
let big3: Array<{ a: string | number; b: number }> = small3; // array - object와 같음

