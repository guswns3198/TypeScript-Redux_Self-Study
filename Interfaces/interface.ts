function hello1(person: { name: string, age: number }): void {
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

const p1: { name: string; age: number} = {
  name: "Mark",
  age: 39,
}

hello1(p1);

// 위의 식을 아래처럼 바꿀 수 있다.
// Person1 이라는 Interface 생성

interface Peroson1 {
  name: string;
  age: number;
} 

function hello2(person: Peroson1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

const p2: Peroson1 = {
  name: "Mark",
  age: 39,
}

hello1(p1);