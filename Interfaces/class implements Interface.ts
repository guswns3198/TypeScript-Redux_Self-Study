interface IPerson1 {
  name: string,
  age?: number,
  hello(): void;
}

// interface를 class로 사용한다기보다 interface에 있는 내용을 바탕으로 Person이라는 class를 만들어냄

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`)
  }
}

const person1: IPerson1 = new Person("Mark");
person1.hello();

