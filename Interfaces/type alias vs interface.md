# TypeScript

## :triangular_flag_on_post: type alias vs interface


## :pencil2: function

```
// type alias
type EatType = (food: string) => void;
```

```
// interface
interface EatType {
  (food: string): void;
}
```

----------------------------------------------------------------

## :pencil2: array

```
// type alias
type PersonList = string[];
```

```
// interface
interface PersonList {
  [index: number]: string;
}
```

----------------------------------------------------------------

## :pencil2: intersection

```
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtistsData {
  artists: { name: string }[];
}
```

```
// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;
```

```
// interface
interface ArtistsResponse extends ArtistsData, ErrorHandling {}
```

let art: ArtistResponseType;
let art2: ArtistResponse;

----------------------------------------------------------------

## :pencil2: union types

```
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type petType = Bird | Fish;

// 아래 두개는 불가능 (union type은 interface에 상속 불가능, class에도 불가능)

interface IPet extends petType {}

class pet implements petType {}
```

----------------------------------------------------------------

## :pencil2: Declaration Merging - interface

```
interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}

let test: MergingInterface;
mi.a
mi.b

똑같은 이름의 Interfaces를 여려군데에서 사용해도 나중에 하나로 합쳐짐 즉 Merging 되는 것 !
Type Alias에서는 Duplicate identifier(중복 식별자)로 인식하여 사용이 불가능 !
```

Type Alias => 어떤 타입을 부르는 이름  
Interface => 새로운 타입을 만들어 내는 것

