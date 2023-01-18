let x: [string, number];

x = ["Hello", 2023]

// x = [10, "James"]; => 각 위치마다 타입이 다르므로 Error

// x[3] = "world"; => x의 인덱스 요소는 1까지만 존재하는데 3번째 요소를 지정하라고 하니 Error



const person: [string, number] = ["James", 28];

const [first, second] = person;