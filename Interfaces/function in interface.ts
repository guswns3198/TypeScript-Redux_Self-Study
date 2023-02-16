interface Person5 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person5 = {
  name: "Mark",
  age: 39,
  hello: function(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};

const p42: Person5 = {
  name: "Mark",
  age: 39,
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};