// class가 다른 class를 가져다가 자신만의 기능을 추가해서 사용하는 것

class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}이고, 나이는 ${this._age} 입니다.`);
  }
}

const final = new Parent("Yang", 28);
// final._age = 25; private 접근 제어자가 있기에 _age에는 접근이 불가능하고 _name도 그러하다.

// final.print(); => 이름은 Yang이고, 나이는 28 입니다.

class Child extends Parent { // Child는 Parent의 생성자를 그대로 가져오게 됨

  public gender = "male";

  constructor(age: number) { // 상속을 받은 class는 부모 class의 생성자를 호출해줘야 함
    super("Hyun Jun",age)
  }
}

const newChild = new Child(29);

newChild.print()
