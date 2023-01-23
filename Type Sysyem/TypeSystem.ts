//매개변수의 타입을 number로 지정
// 함수의 리턴 타입은 명시적으로 지정하지 않았기 때문에 number로 추론

function apple(a: number) {
  if (a > 0) {
    return a * 30;
  }
}

console.log(apple(5)); // 150
console.log(apple(-5)); // NaN

// 해당 함수를 사용하는 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행하였지만
// 0 이상의 수를 입력하였을 때만 값이 올바르게 나오고 0 이하의 수를 입력시에 NaN가 나오게 됩니다.

// 여기서 "strictNullChecks" 라는 옵션을 키게되면 모든 타입에 자동으로 포함되어 있는 'null', 'undefined'를 제거해줌

// 밑에는 strictNullChecks를 켰을 때의 예시

function apples(a: number) { // 매개변수의 타입을 명시적으로 지정
  if (a > 0) { 
    return a * 30; // 지정하지 않은 함수의 리턴 타입은 number | undefined로 추론
  }
}

console.log(apple(5)); // 150, 사용자가 사용법에 맞게 숫자형을 사용하여 함수 실행
console.log(apple(-5)); // undefined, 함수의 리턴 타입이 number | undefined 이기에 타입에 따른 연산을 바로 할 수 없다.

// 해당 컴파일 에러를 고치기 위해 사용자와 작성자가 의논을 해야함



// ----------------------------------------------------------------


// 명시적으로 리턴 타입을 지정할 경우

function banana(a: number): number {
  if (b > 0) {
    return a * 5;
  }
}

// 위 함수는 if부분만 리턴되기 때문에 if가 아닌 부분에도 작업이 덜 되었다는 Error가 뜨게 됨
// noImplicitReturns 옵션을 키게되면 함수 내에서 모든 코드가 값을 리턴하지 않을 시 컴파일 에러를 발생시킴



// ----------------------------------------------------------------


// 매개변수에 object가 들어오는 경우

function pair(a) {
  return `이름은 ${a.name} 이고, 연령대는 ${Math.floor(a.age / 10) * 10}대 입니다.`
}

console.log(pair({ name: 'James', age: 28 })); // 이름은 James 이고, 연령대는 20대 입니다.

console.log(pair('James')); // 이름은 undefined 이고, 연령대는 NaN 입니다.

// 즉 위 함수는 에러를 발생시키기에 아래처럼 object literal type으로 a의 타입을 지정해야함

function pair2(a: { name: string, age: number }): string {
  return `이름은 ${a.name} 이고, 연령대는 ${Math.floor(a.age / 10) * 10}대 입니다.`
}

console.log(pair({ name: 'James', age: 28 })); // 이름은 James 이고, 연령대는 20대 입니다.

console.log(pair('James')); // error : Argument of type 'string' is not assignable to parameter of type '{ name: string; age: number;}'

