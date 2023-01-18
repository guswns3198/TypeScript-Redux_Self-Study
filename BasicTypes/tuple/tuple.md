## :pencil2: Tuple

1. 순서, 타입, 길이 모두 일치해야 한다.
2. 권장되는 사용법은 아니지만 엄격하게 지겨야 할 규칙이 있는 배열이 있다면 Tuple이 필요할 수 있다.

```
let x: [string, number];

x = ["Hello", 2023] // O

x = ["Hello", 2023, 2024] // X

x = [2023, "Hello"] // X
```