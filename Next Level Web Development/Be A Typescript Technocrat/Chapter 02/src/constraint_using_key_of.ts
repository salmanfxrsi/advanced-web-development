{
  // generic constraint with keyof operator

  interface Vehicle {
    bike: string;
    car: string;
    ship: string;
  }

  type Owner = "bike" | "car" | "ship"; // manually
  type OwnerPro = keyof Vehicle; // using keyof

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "mr farsi",
    age: 18,
    address: "dhaka",
  };

  getPropertyValue(user, "name");

  //
}
