class PersonExtends<T extends string | number> { // T는 string과 number만 가능
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Yang");
new PersonExtends(28);
// new PersonExtends(true) => boolean 타입이기에 에러 발생