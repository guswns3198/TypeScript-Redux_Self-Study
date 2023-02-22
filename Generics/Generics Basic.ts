function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>("Yang", 28); // 타입을 지정하는 방식
helloBasic(28, 31); // 타입이 추론되는 방식