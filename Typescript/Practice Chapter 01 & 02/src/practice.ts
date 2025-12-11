// Task 1: Basic Data Types and First Program
// Objective: Write a TypeScript program that outputs a welcome message.

// Instructions:

// Create a TypeScript program.
// Print the following message to the console:
// Hello World, I will become a Next level Web Developer!

// Solution:

const welcomeMessage = (): void => {
  let message: string =
    "Hello World, I will become a Next level Web Developer!";
  console.log(message);
};

// welcomeMessage();

// Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.

// Instructions:

// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.

// Solution:

type Role = "admin" | "user" | "guest";

const takeUserDetails = (name: string, age: number, role?: Role) => {
  console.log(`User is ${name}, Age is ${age} and Role is ${role}`);
};

// takeUserDetails("Farsi", 18, "admin");

// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

// Solution:

type MaritalStatus = "single" | "married" | "divorced";
type HairColor = "black" | "brown" | "blonde" | "gray" | "other";
type EyeColor = "brown" | "blue" | "green" | "gray" | "other";

type Address = {
  street: string;
  city: string;
  country: string;
};

type FamilyMember = {
  name: string;
  relation: string;
};

type Job = {
  title: string;
  company: string;
  salary: number;
};

type Skill = {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
};

type Person = {
  name: string;
  address: Address;
  hairColor: HairColor;
  eyeColor: EyeColor;
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: FamilyMember[];
  job: Job;
  skills: Skill[];
  maritalStatus: MaritalStatus;
  friends: string[];
};

const person: Person = {
  name: "Farsi",
  address: {
    street: "27",
    city: "Dhaka",
    country: "Bangladesh",
  },
  hairColor: "black",
  eyeColor: "brown",
  income: 100000,
  expense: 40000,
  hobbies: ["coding", "cricket", "traveling"],
  familyMembers: [{ name: "Ahmed", relation: "Brother" }],
  job: {
    title: "Full Stack Developer",
    company: "Digital Resolution",
    salary: 120000,
  },
  skills: [
    { name: "React", level: "advanced" },
    { name: "Node.js", level: "intermediate" },
    { name: "TypeScript", level: "advanced" },
  ],
  maritalStatus: "single",
  friends: ["Alex", "James", "Tom"],
};

// console.log(person);

// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.

// Solution:

interface Book {
  name: string;
  price: number;
  authorName: string;
}

interface Magazine {
  name: string;
  topic: string;
  price: number;
}

type UnionBookMagazine = Book | Magazine;
type IntersectionBookMagazine = Book & Magazine;

const BookMagazine: IntersectionBookMagazine = {
  name: "book one",
  price: 563,
  authorName: "hey",
  topic: "hello world",
};

// Task 5: Function Type
// Objective: Write a function that reverses a string.

// Instructions:

// Write a function reverseString that:
// Takes a single string argument.
// Returns the string in reverse order.
// Example:
// Input: "hello"
// Output: "olleh"

// Solution:

const reverseString = (value: string): string => {
  return value.split("").reverse().join("");
};

// console.log(reverseString("hello"));

// Task 6: Spread and Rest Operators, Destructuring
// Objective: Write a function that uses the rest operator for variable-length arguments.

// Instructions:

// Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.

// Solution:

const sumOfNumber = (...num: number[]): number => {
  return num.reduce(
    (previous: number, current: number): number => previous + current,
    0
  );
};

// console.log(sumOfNumber(10, 20, 30));

// Task 7: Type Assertion and Narrowing
// Objective: Write a function that behaves differently based on the input type.

// Instructions:

// Create a function that accepts a parameter of type string | number.
// The function should:
// Return the length if the input is a string.
// Return the square if the input is a number.

// Solution:

const taskSeven = (value: string | number): number => {
  if (typeof value === "string") return value.length;
  else return value * value;
};

// console.log(taskSeven("typescript"), taskSeven(7));

// Task 8: Intersection Types
// Objective: Practice using intersection types.

// Instructions:

// Create a type AdminUser that is an intersection of:
// User with properties name and email
// Admin with property adminLevel
// Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.

type User = {
  name: string;
  email: string;
};

type Admin = {
  adminLevel: number;
};

type AdminUser = Admin & User;

const describeAdmin = (user: AdminUser): string => {
  return `The name of admin is ${user.name} and email is ${user.email} : Admin level ${user.adminLevel}`;
};

const user = {
  name: "Farsi",
  adminLevel: 1,
  email: "salmanfarsi9005@gmail.com",
};

// console.log(describeAdmin(user));

// Task 9: Optional Chaining
// Objective: Use optional chaining with nested objects.

// Instructions:

// Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.

// Task 10: Nullish Coalescing
// Objective: Handle null and undefined values using nullish coalescing.

// Instructions:

// Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.

// Solution:

const getDisplayName = (name: string | null | undefined): string => {
  return name ?? "Anonymous";
};

// console.log(getDisplayName(null));

// Task 11: Unknown Type
// Objective: Handle different types with the unknown type.

// Instructions:

// Write a function processData(data: unknown) that:
// Checks if data is a string and returns the uppercased version.
// If data is a number, returns the square of it.

const processData = (data: unknown): string | number => {
  if (typeof data === "string") return data.toUpperCase();
  else if (typeof data === "number") return data * data;
  else return "unsupported type";
};

// Task 12: Never Type
// Objective: Use the never type for functions that don’t return.

// Instructions:

// Write a function handleError that:
// Accepts a message: string.
// Throws an error with the given message.
// Use the never return type to indicate that this function never returns.

// Solution:

const handleError = (message: string): never => {
  throw new Error(message);
};

// handleError("something went wrong!");

// Task 13: Generics with Functions and Interfaces
// Objective: Use generics to handle different types.

// Instructions:

// Create a generic function that:
// Accepts an array of any type.
// Returns a new array with duplicate values removed.

// Task 14: Asynchronous TypeScript and Type Aliases
// Objective: Simulate an asynchronous operation with TypeScript.

// Instructions:

// Write an asynchronous function that:
// Simulates fetching user data (containing name and age).
// Returns the data after a short delay.

// Task 15: Type Guards
// Objective: Create custom type guards for more accurate type checking.

// Instructions:

// Write a function isString(value: unknown): value is string that checks if a value is a string.
// Use this in another function printUpperCase(value: unknown): void that prints the value in uppercase if it’s a string.

// Solution:

const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

const printUpperCase = (value: unknown): void => {
  if (isString(value)) console.log(value.toUpperCase());
};

// printUpperCase("farsi");

// Task 16: Utility Types and Keyof Constraints
// Objective: Access object properties dynamically using keyof.

// Instructions:

// Create a function that:
// Takes an object and a key.
// Returns the property value from the object based on the provided key.
// Use keyof to constrain the key to valid properties of the object.
