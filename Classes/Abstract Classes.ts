// 이 키워드를 이용 시 완전치 않은 클래스 표현이 가능하며 완전치 않은 클래스는 new를 통해 개체를 만들어 낼 수 없다.
// 완전치 않은 개체를 상속과 같은 기능을 이용하여 완전하게 만든 다음 사용할 수 있게 할 수 있다.

abstract class AbstractPerson {
  protected _name: string = "Yang";

  abstract setName(name: string): void;
}

// new AbstractPerson();

class Person20 extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const q = new Person20();
q.setName('Yang');