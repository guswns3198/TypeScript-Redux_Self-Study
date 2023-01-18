function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나');

any1.toString(); // 이렇게 적어도 오류가 없음

// 아래는 any는 개체를 통해 전파된다는 것의 예시

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d; // 이런식으로 작성해도 Error가 뜨지 않음

function leakingAny(obj: any) {
  const a = obj.number; // a의 타입은 any
  const b = a + 1; // b도 any
  return b;
}

const c = leakingAny({ number: 0 }); // c도 any
c.indexOf("0");

// 그러나 const a: number로 타입을 지정해두면 a, b, c 모두 타입이 number로 바뀌게 된다. 즉, 누수를 막게 된다.