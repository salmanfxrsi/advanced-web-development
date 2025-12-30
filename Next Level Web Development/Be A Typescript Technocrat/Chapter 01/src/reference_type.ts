// reference type --> object

const user: {
  company: "Tinzoo BD"; // type --> literal types
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Tinzoo BD",
  firstName: "Salman",
  lastName: "Farsi",
  isMarried: false,
};

user.firstName = "Alex";
