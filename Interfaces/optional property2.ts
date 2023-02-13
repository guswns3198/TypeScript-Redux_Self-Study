interface Person3 {
  name: string;
  age?: number;
  [index: string]: any; // 어떠한 이름의 property가 와도 괜찮다는 의미 = Indexable type
};

function hello4(person: Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`)
};

const p31: Person3 = {
  name: "Mark",
  age: 39,
};

const p32: Person3 = {
  name: "Anna",
  sisters: ['Sung', 'Chan']
};

const p33: Person3 = {
  name: "Jun",
  father: p31,
  motehr: p32,
};

