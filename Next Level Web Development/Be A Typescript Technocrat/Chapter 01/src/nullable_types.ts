{
  // nullable types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("there is nothing to search");
    }
  };

  searchName(null);

  // unknown typeof
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m/s`);
    } else if (typeof value === "string") {
      const [result, unit]: string[] = value.split(" ");
      const convertedSpeed: number = (parseFloat(result) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} m/s`);
    } else {
      console.log("wrong input");
    }
  };

  getSpeedInMeterPerSecond(100);

  // never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("Farsi is finally successful");
}
