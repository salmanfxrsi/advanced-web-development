{
  // inheritance in oop
  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mr Farsi", 18, "Dhaka");

  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
      super(name, age, address);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} classes`);
    }
  }

  const teacher = new Teacher("Mr. teacher", 40, "Uganda", "professor");

  //
}
