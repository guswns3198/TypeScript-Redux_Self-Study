// class => object를 만들어내는 청사진
// {Yang: 'male', Jade: 'male'} A반
// {Chloe: 'female', Alex: 'male', Anna: 'female'} B반
var StudentsExample = /** @class */ (function () {
    function StudentsExample() {
        this.Yang = 'male';
        this.Jade = 'male'; // 이렇게 쓰게되면 새로운 친구가 들어올 때 계속 적어줘야 하기에 동적으로 처리할 수 없게됨
    }
    return StudentsExample;
}());
// 이럴 때 도와주는게 Index Signature
var Students = /** @class */ (function () {
    function Students() {
    }
    return Students;
}());
var classA = new StudentsExample();
classA.Yang = "male";
classA.Jade = "male";
console.log(classA);
var classB = new Students();
classB.Chloe = "female";
classB.Alex = "male";
classB.Anna = "female";
console.log(classB);
