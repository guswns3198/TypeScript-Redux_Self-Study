// 세팅은 할 수 없고 get만 할 수 있음

class Person13 {
  public readonly name: string = 'Yang';
  private readonly country: string = 'Korea';

  public constructor(public _name: string, private age: number) {}
  
  hello() {
    // this.country = ' USA'; 읽기 전용 속성이기에 'country'에 할당 불가능
  }
  
}