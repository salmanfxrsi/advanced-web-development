{
  // constraints in typescript
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 222,
    name: "Mr X",
    email: "x@gmail.com",
  });
  const student2 = addCourseToStudent({
    id: 444,
    name: "Mr Y",
    email: "y@gmail.com",
    devType: "NLW",
  });

  //
}
