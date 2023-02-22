// keyof 와 generic 이용해 타입을 적절히 찾아내고 활용하는 시스템 (컴파일 타임에 타입을 정확히 찾아내는 시스템)

interface IPerson {
  name: string;
  age: number;
};

// type Key = keyof IPerson;


const personMe: IPerson = {
  name: "Yang",
  age: 28,
};

// IPerson[keyof IPerson] 
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number


function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
};

getProp(personMe, "name");
getProp(personMe, "age");

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
};

setProp(personMe, "name", "Jun");
setProp(personMe, "age", 29);