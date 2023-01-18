declare const maybe: unknown;

if (typeof maybe === 'number') { // 타입의 안정성을 any 보다는 높이기 위해 Type guard 사용
  const aNumber: number = maybe; // maybe의 타입을 any로 설정해 두었다면 Type guard를 안써도 Error가 안뜸
}

if (maybe === true) {
  const aBoolean: boolean = maybe;
}

if (typeof maybe === 'string') {
  const aString: string = maybe
}