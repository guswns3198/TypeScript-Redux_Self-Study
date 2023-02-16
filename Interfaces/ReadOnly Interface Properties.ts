interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "Yang",
  gender: "male",
};

// p81.gender = "female";

// readonly 속성으로 인해 p81의 gender 속성은 변경이 불가하다.