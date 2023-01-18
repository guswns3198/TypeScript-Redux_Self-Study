function returnVoid(message: string): void {
  console.log(message);

  return undefined; // void로 지정된 함수는 return을 가지고 무엇도 하지 않겠다고 명시적으로 표현한 행위이며
                    // return 뒤에 유일하게 들어갈 수 있는 값은 undefined이다.
}

const r = returnVoid('리턴이 없다'); // r의 타입은 void

