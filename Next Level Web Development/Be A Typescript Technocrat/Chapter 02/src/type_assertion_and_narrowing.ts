{
  // type assertion and narrowing
  let anything: any;
  anything = "I am starting my own business";
  anything = 222;

  // (anything as number).

  const kgToGm = (val: string | number) => {
    if (typeof val === "string") {
      const convertedValue = parseFloat(val) * 1000;
      return `The converted weight is ${convertedValue}`;
    }
    if (typeof val === "number") {
      return val * 1000;
    }
  };

  const result = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;
  console.log({ result, result2 });

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
