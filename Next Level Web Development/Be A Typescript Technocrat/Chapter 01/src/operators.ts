{
  // ternary operator || optional operator || nullish coalescing operator

  const age: number = 18;

  if (age >= 18) console.log("adult");
  else console.log("not adult");

  const isAdult: string = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator
  // null / undefined --> decision making

  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";
  console.log({ result1 });
  console.log({ result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Farsi",
    address: {
      city: "Dhaka",
      road: "43",
      presentAddress: "Dhaka",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "no permanent address";
  console.log({ permanentAddress });
}
