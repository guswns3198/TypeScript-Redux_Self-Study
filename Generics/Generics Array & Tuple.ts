// Array 사용 시

function helloArray<T>(message: T[]): T {
  return message[0];
}

helloArray(["Hello", "World"]);
helloArray(["Hello", 7]); // message: ( string | number )[]

// Tuple 사용 시

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

helloTuple(["Hello", "World"]);
helloTuple(["Hello", 7]); // message: [ string, number ]