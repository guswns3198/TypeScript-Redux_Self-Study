## :pencil2: compileOptions

아래 2개(typeRoots, types)는 default 설정이 아니고 추가적으로 다른 설정을 하고 싶을 때 쓰이는 프로퍼티이다.

## :pencil2: typeRoots, types

```
"typeRoots": {
    "description": "`./node_modules/@types`처럼 작동하는 여러 폴더 지정",
    // 다른 폴더도 지정해서 쓰고싶을 때 typeRoots에 배열로 추가해서 사용
    "type": "array",
    "uniqueItems": true,
    "items": {
      "type": "string"
    },
    "markdownDescription": "Specify multiple folders that act like `./node_modules/@types`.\n\nSee more:
https://www.typescriptlang.org/tsconfig#typeRoots"
},

"types": {
    "description": "소스 파일에서 참조하지 않고 포함할 유형 패키지 이름 지정",
    // 패키지의 경로가 아닌 이름을 써줘야 함 ex) react
    "type": "array",
    "uniqueItems": true,
    "items": {
      "type": "string"
    },
    "markdownDescription": "Specify type package names to be included without being referenced in a
source file.\n\nSee more: https://www.typescriptlang.org/tsconfig#types"
},
...,
```

--------------------------------------------------------

## :pencil2: @types

- TypeScript 2.0부터 사용 가능해진 내장 type definition 시스템
- 아무설정도 안하면 node_modules/@types 라는 모든 경로를 찾아서 사용
- typeRoots를 사용하면 배열 안에 들어있는 경로들 아래에서만 가져온다.
- types를 사용하면 배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아온다.
- 빈배열을 넣는다면 해당 시스템을 이용하지 않겠다는 의미
- typeRoots와 types를 같이 사용하지 않는다.



--------------------------------------------------------

## :pencil2: target

- 빌드의 결과물을 어떤 버전으로 할 것인지
- 지정을 안한다면 타입스크립트 해당버전의 default를 따름

```
"target": {
compileOptions : target
  "description": "내보낸 JavaScript의 JavaScript 언어 버전을 설정하고 호환 가능한 라이브러리 선언을 포함"
  "type": "string",
  "default": "ES3",
  // 따로 target 설정안하면 ES3에서 돌릴 수 있는 형태로 자바스크립트가 만들어짐
  "anyOf": [
{
"enum": [
        "ES3",
        "ES5",
        "ES6",
        "ES2015",
        "ES2016",
        "ES2017",
        "ES2018",
        "ES2019",
        "ES2020",
        "ESNext"
] },
    {
      "pattern": "^([Ee][Ss]([356]|(20(1[56789]|20))|[Nn][Ee][Xx][Tt]))$"
} ],
  "markdownDescription": "Set the JavaScript language version for emitted JavaScript and include compat
}
```

--------------------------------------------------------

## :pencil2: lib

- 기본 type definition 라이브러리를 어떤 것을 사용할 것인지

```
"lib": {
compileOptions : lib
    "description": "대상 런타임 환경을 설명하는 번들 라이브러리 선언 파일 세트 지정",
    "type": "array",
    "uniqueItems": true,
    "items": {
      "type": "string",
      "anyOf": [
{
"enum": [
            "ES5", "ES6", "ES2015", "ES2015.Collection", "ES2015.Core", "ES2015.Generator",
"ES2015.Iterable", "ES2015.Promise", "ES2015.Proxy", "ES2015.Reflect", "ES2015.Symbol.WellKnown",
"ES2015.Symbol", "ES2016", "ES2016.Array.Include", "ES2017", "ES2017.Intl", "ES2017.Object",
"ES2017.SharedMemory", "ES2017.String", "ES2017.TypedArrays", "ES2018", "ES2018.AsyncGenerator",
"ES2018.AsyncIterable", "ES2018.Intl", "ES2018.Promise", "ES2018.Regexp", "ES2019", "ES2019.Array",
"ES2019.Object", "ES2019.String", "ES2019.Symbol", "ES2020", "ES2020.BigInt", "ES2020.Promise",
"ES2020.String", "ES2020.Symbol.WellKnown", "ESNext", "ESNext.Array", "ESNext.AsyncIterable",
"ESNext.BigInt", "ESNext.Intl", "ESNext.Promise", "ESNext.String", "ESNext.Symbol", "DOM",
"DOM.Iterable", "ScriptHost", "WebWorker", "WebWorker.ImportScripts"
]
```

--------------------------------------------------------

## :pencil2: outDir, outFile, rootDir

```
"outFile": {
    "description": "모든 출력을 하나의 Js 파일로 묶는 파일을 지정",
    "type": "string",
    "markdownDescription": "Specify a file that bundles all outputs into one JavaScript file. If
`declaration` is true, also designates a file that bundles all .d.ts output.\n\nSee more:
https://www.typescriptlang.org/tsconfig#outFile"
  },
  "outDir": {
    "description": "내보낸 모든 파일의 출력 폴더 지정.",
    "type": "string",
    "markdownDescription": "Specify an output folder for all emitted files.\n\nSee more:
https://www.typescriptlang.org/tsconfig#outDir"
  },
  "rootDir": {
    "description": "소스 파일 내의 루트 폴더 지정.",
    "type": "string",
    "markdownDescription": "Specify the root folder within your source files.\n\nSee more:
https://www.typescriptlang.org/tsconfig#rootDir"
}
```

--------------------------------------------------------

## :pencil2: strict

```
{
  "strict": {
      "description": "엄격하게 타입을 확인하는 옵션 활성화",
      // strict 안에는 여러개의 엄격한 타입 체크 옵션들이 들어있는데 그걸 모두 킴
      "type": "boolean",
      "default": false,
      "markdownDescription": "Enable all strict type checking options.\n\nSee more:
  https://www.typescriptlang.org/tsconfig#strict"
  }
}
```

## :pencil2: strict options

- --noImplicitAny

1. 명시적이지 않게 any 타입을 사용하여 표현식과 선언식에 사용 시 에러를 발생
2. 타입스크립트가 추론을 실패한 경우 any가 맞으면 any라고 지정
3. 아무것도 쓰지 않을 시 에러를 발생
4. 이 오류를 해결 후 any라고 지정되어 있지 않은 경우엔 any가 아닌 것 (타입추론이 되었기 때문)

--------------------------------------------------------
- --noImplicitThis

1. 명시적이지 않게 any 타입을 사용하여 this 표현식에 사용하면 에러를 발생
2. 첫번째 매개변수 자리에 this를 놓고 this에 대한 타입을 어떤 것도 표현하지 않으면 noImplicitAny가 오류를 발생시킴
3. Js에선 매개변수에 this를 넣으면 이미 예약된 키워드라 SyntaxError를 발생
4. call / apply / bind 와 같이 this를 대체하여 함수 콜을 하는 용도로도 쓰임
5. 그래서 this를 any로 명시적으로 지정하는 것은 합리적이다.

--------------------------------------------------------
- --strictNullChecks

1. 이 모드에서는 null 및 undefined 값이 모든 유형의 도메인에 속하지 않고 그 자신을 타입으로 가지거나 any일 경우에만 할당이 가능
2. 한가지 예외는 undefined에 void 할당 가능
3. 이걸 적용하지 않으면 모든 타입은 null 및 undefined 값을 가질 수 있음
4. string으로 타입을 지정해도 null 혹은 undefined 값을 할당할 수 있다는 뜻

--------------------------------------------------------
- --strictFunctionTypes

1. 함수 타입에 대한 bivariant 매개변수 검사를 비활성화 하는 옵션

--------------------------------------------------------
- --strictPropertyInitialization

1. 정의되지 않은 클래스의 속성이 생성자에서 초기화가 되었는지 확인
2. 이 옵션을 사용하려면 --strictNullChecks를 사용하도록 설정해야 함

--------------------------------------------------------
- --strictBindCallApply


--------------------------------------------------------
- --alwaysStrict