class PersonClass<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new PersonClass("Yang", 28);

new PersonClass<string, number>("Yang", 28);

// 컴파일 타임에서 에러 체크 가능