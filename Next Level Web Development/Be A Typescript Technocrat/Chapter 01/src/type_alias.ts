{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Salman",
    age: 18,
    gender: "male",
    contactNo: "01754800757",
    address: "Dhaka",
  };

  const student2: Student = {
    name: "Farsi",
    age: 18,
    gender: "male",
    address: "Dhaka",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Farsi";
  const isAdmin: IsAdmin = true;

  type Add = (x: number, y: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
