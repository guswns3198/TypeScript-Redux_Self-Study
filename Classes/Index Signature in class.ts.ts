// class => object를 만들어내는 청사진
// {Yang: 'male', Jade: 'male'} A반
// {Chloe: 'female', Alex: 'male', Anna: 'female'} B반

class StudentsExample {
  Yang: string = 'male';
  Jade: string = 'male'; // 이렇게 쓰게되면 새로운 친구가 들어올 때 계속 적어줘야 하기에 동적으로 처리할 수 없게됨
}

// 이럴 때 도와주는게 Index Signature

class Students {
  [index: string]: "male" | "female";
}

const classA = new Students();
classA.Yang = "male";
classA.Jade = "male";

const classB = new Students();
classB.Chloe = "female";
classB.Alex = "male";
classB.Anna = "female";