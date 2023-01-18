# TypeScript


## :triangular_flag_on_post: Primitive Types

:small_blue_diamond: 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형

:small_blue_diamond: Primitive형의 내장함수 사용 가능한건 자바스크립트 처리 방식 덕분

```
let name = 'James' // name.toString()
```

:small_blue_diamond: boolean, number, string, symbol, null, undefined ...

## :pencil2: Number

1. JS와 같이 TS의 모든 숫자는 부동 소수점 값
2. TS는 16진수 및 10진수 리터럴 외에도 2진수와 8진수를 지원
3. NAN
4. 1_000_000과 같은 표기 가능

## :pencil2: String

1. 다른 언어와 마찬가지로 텍스트 형식을 참조하기 위해 'string' 형식 사용
2. JS와 마찬가지로 TS는 문자열 데이터를 둘러싸기 위해 큰 따옴표, 작은 따옴표 사용

```
let name: string = "James" // name = 'Mark'
```

3. Template String 사용 가능

## :pencil2: Symbol

1. ECMAscript 2015의 Symbol
2. new Symbol로 사용 불가능
3. Symbol을 함수로 사용하여 symbol 타입을 만들어낼 수 있다.
4. Primitive 타입의 값을 담아서 사용
5. 고유하고 수정 불가능한 값으로 만들어 준다.
6. 주로 접근을 제어하는데 쓰였다.

## :pencil2: null & undefined

1. TS에서 null과 undefined는 실제로 각각 null과 undefined 라는 타입을 가진다.
2. 둘 다 소문자만 존재하며 void와 마찬가지로 '그 자체'로는 그다지 유용하지 않다.

```
let u: undefined = undefined;
let n: null = null;
```

3. undefined & null은 다른 모든 타입의 서브타입으로 존재 즉, number에 null 또는 undefined를 할당할 수 있다.
4. 컴파일 옵션에서 '--strictNullChecks'를 사용하면 null과 undefined는 void나 자기 자신들에게만 할당할 수 있다.
5. number와 같은 타입에 null, undefined를 사용하기 위해 union type을 이용해야 한다.

## :pencil2: null

1. null 이라는 값으로 할당된 것을 null 이라고 하며 무언가가 있지만 사용할 준비가 덜 된 상태를 의미한다.
2. null 타입은 null 값만 가질 수 있으며 런타임에서 typeof 연산자 사용 시 object가 나온다.

## :pencil2: undefined

1. 값을 할당하지 않은 변수는 undefined 라는 값을 가진다.
2. 무언가가 준비되지 않은 상태이며 object의 property가 없을 때에도 undefined 이다.
3. 런타임에서 typeof 연산자 사용 시 undefined가 나온다.