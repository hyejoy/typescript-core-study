interface Person1 {
  name: string;
  age: number;
}

class Person {
  name: string; // ✅ 프로퍼티 선언 추가
  age: number; // ✅ 프로퍼티 선언 추가

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const per1 = new Person("철수", 20);
console.log(per1);
