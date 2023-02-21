function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들을 해결하기 위해 any를 사용하지만 그건 내가 의도한 바와는 다른 결과를 가져올 수 있음

function hello(message: any): any {
  return message;
}

console.log(hello('Yang').length); // number가 아닌 any로 나옴
console.log(hello(28).length); // 런타임에서는 undefined로 나옴

// 이러한 부분에서 인자에 들어가는 타입을 변수같은 것으로 활용해서 리턴되는 타입과 연관을 시켜주면 좋겠다고 생각하여 나온 것이 Generics

function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric('Yang'));
console.log(helloGeneric('Yang').length); // 런타임에서 number 형식으로 나옴
console.log(helloGeneric(true));
// console.log(helloGeneric(28).length); 28 형식에서 length 속성이 있다고 나옴 즉, number에는 length를 쓸 수 없기 때문