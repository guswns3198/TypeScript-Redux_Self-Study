## :pencil2: Object

1. primitive type이 아닌 것을 나타내는 타입
2. primitive type이 아닌 것을 나타내고 싶을 때 사용하는 타입

let obj: object = {};

obj = {name: "James"};

obj = [{name: "James",}];

obj = 39; <= Error

obj = "James" <= Error

obj = true <= Error

obj = null <= Error

obj = undefined <= Error

obj = Symbol() <= Error