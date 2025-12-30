{
  // mapped types

  const arrOfNumbers: number[] = [1, 4, 5];

  // const arrOfString: string[] = ["1", "4", "5"];
  const arrOfString: string[] = arrOfNumbers.map((number) => number.toString());
  console.log(arrOfString);

  interface AreaNumber {
    height: number;
    width: number;
  }

  //   interface AreaString {
  //     height: string;
  //     width: string;
  //   }

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  //
}
