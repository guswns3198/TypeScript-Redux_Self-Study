## :pencil2: compileOptions

아래 2개는 default 설정이 아니고 추가적으로 다른 설정을 하고 싶을 때 쓰이는 프로퍼티이다.

## :pencil2: typeRoots, types

```
"typeRoots": {
    "description": "Specify multiple folders that act like `./node_modules/@types`.",
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
    "description": "Specify type package names to be included without being referenced in a source file.",
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
  "description": "Set the JavaScript language version for emitted JavaScript and include compatible library declarations."
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
    "description": "Specify a set of bundled library declaration files that describe the target runtime environment.",
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