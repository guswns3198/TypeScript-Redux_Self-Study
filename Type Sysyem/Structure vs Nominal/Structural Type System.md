## :pencil2: Structural Type System

:small_blue_diamond: TypeScript는 Structural Type System을 따르고 있으며 구조가 같으면 같은 타입으로 취급한다.

```
interface IPerson {
  name: string;
  age: number;
  speak () : string;
}

type PersonType = {
  name: string;
  age: number;
  speak () : string;
}
```

```
let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;
```