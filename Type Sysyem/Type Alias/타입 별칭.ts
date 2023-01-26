// Aliasing Primitive

type MyStringType = string;

const str = 'Hello';

let myStr: MyStringType = 'World';
myStr = str

// ----------------------------------------------------------------

// Aliasing Union Type

let James: string | number = 0; // string | number라는 유니온 타입을
James = 'LeBron';               // 필요할 때 마다 적기에는 길이가 길다.

type PersonUnion = string | number // 해당 유니온 타입을 한 별칭으로 지정

let another: PersonUnion = 0; // 지금과 같이 필요할 때 그 별칭을 사용
another = 'Wade';

// ----------------------------------------------------------------

// Aliasing Tuple

let Messi: [string, number] = ['Leo', 35]; // Tuple 타입에도 별칭을 부여해

type PersonTuple = [string, number]; // 여러군데에서 필요할 때 사용할 수 있게 한다.

let another2: PersonTuple = ['Son', 30];

// ----------------------------------------------------------------

// Aliasing Function

type EatType = (food: string) => void;
// function 또한 길이가 긴 함수부분을 별칭을 사용해 그 길이를 줄일 수 있다.

