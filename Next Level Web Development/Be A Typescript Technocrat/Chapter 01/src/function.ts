// learning function
// normal function
// arrow function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method
const poorUser = {
  name: "Farsi",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};

const arr: number[] = [1, 2, 3];
const newArray: number[] = arr.map((elem: number): number => elem * elem);
