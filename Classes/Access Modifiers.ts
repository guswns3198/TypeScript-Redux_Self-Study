class Person11 {
  public constructor(public name: string, private age: number) {}
}

const a2: Person11 = new Person11("Yang", 28);

console.log(a2);

// npx tsc 이후 node Access Modifiers.ts를 하면 Person11 { name: "Yang", age: 28 } 이렇게 출력이 된다.
// 그러나 public이 붙어있는 a2.name은 외부에서 접근이 가능하지만 a2.age는 private이기 때문에 외부에서 접근이 불가능하다.