class Person12 {
  public constructor(public _name: string, private age: number) { }
  
  get name() {
    // 컴파일 후 실행하면 Yang 출력
    return this._name;
  }

  set name(n: string) {
    this._name = n;
    // 컴파일 후 실행하면 _name이 Hyun Jun으로 바뀐다.
  }
}

const a3: Person12 = new Person12("Yang", 28);

console.log(a3.name); // get을 하는 함수를 getter
a3.name = "Hyun Jun"; // set을 하는 함수를 setter