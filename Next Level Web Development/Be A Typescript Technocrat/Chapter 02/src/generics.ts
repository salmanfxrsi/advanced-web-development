{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [1, 2, 3];
  const rollNumbers: GenericArray<number> = [1, 2, 3];

  //   const mentors: string[] = ["alex", "james", "farsi"];
  const mentors: GenericArray<string> = ["alex", "james", "farsi"];

  //   const boolArray: boolean[] = [false, true, false];
  const boolArray: GenericArray<boolean> = [false, true, false];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Farsi",
      age: 18,
    },
    {
      name: "Alex",
      age: 45,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];
  const people: [string, string] = ["Mr. X", "Mr. Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "farsi", email: "f@gmail.com" },
  ];

  //
}
