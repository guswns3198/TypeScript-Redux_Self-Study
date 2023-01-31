## :pencil2: compileOptions

아래 2개는 default 설정이 아니고 추가적으로 다른 설정을 하고 싶을 때 쓰이는 프로퍼티이다.

## :pencil2: typeRoots, types

```
"typeRoots": {
    "description": "Specify multiple folders that act like `./node_modules/@types`.", // 다른 폴더도 지정해서 쓰고싶을 때 typeRoots에 배열로 추가해서 사용
    "type": "array",
    "uniqueItems": true,
    "items": {
      "type": "string"
    },
    "markdownDescription": "Specify multiple folders that act like `./node_modules/@types`.\n\nSee more:
https://www.typescriptlang.org/tsconfig#typeRoots"
},

"types": {
    "description": "Specify type package names to be included without being referenced in a source // 패키지의 경로가 아닌 이름을 써줘야 함 ex) react
file.",
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

--------------------------

## :pencil2: @types
- TypeScript 2.0부터 사용 가능해진 내장 type definition 시스템
- 아무설정도 안하면 node_modules/@types 라는 모든 경로를 찾아서 사용
- typeRoots를 사용하면 배열 안에 들어있는 경로들 아래에서만 가져온다.
- types를 사용하면 배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아온다.
- 빈배열을 넣는다면 해당 시스템을 이용하지 않겠다는 의미
- typeRoots와 types를 같이 사용하지 않는다.



--------------------------------------------------------

## :pencil2: target, lib

