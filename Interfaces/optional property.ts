interface Person1 {
  name: string;
  age: number;
} // 해당 Interface는 person에 대입할 수 있는 개체가 항상 위의 식을 충족하여야 한다.

interface Person2 {
  name: string;
  age?: number; // 있을 수도 있고 없을 수도 있을 때
}

function hello3(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`)
}

hello3( { name: "Mark", age: 39 } )
hello3( { name: "Anna" } )