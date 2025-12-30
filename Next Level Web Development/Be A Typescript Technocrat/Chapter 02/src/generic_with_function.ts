{
  // generic with function
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  interface User {
    id: number;
    name: string;
  }

  const resGenericObject = createArrayWithGeneric<User>({
    id: 222,
    name: "farsi",
  });

  const createArrayWithTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
  };

  const resTuple = createArrayWithTuple<string, number>("Bangladesh", 222);
  const resTuple2 = createArrayWithTuple<string, { name: string }>(
    "Bangladesh",
    { name: "Asia" }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({ name: "Mr X", email: "x@gmail.com" });
  const student2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    devType: "NLW",
  });

  //
}
