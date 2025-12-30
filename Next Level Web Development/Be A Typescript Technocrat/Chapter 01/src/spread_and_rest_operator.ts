{
  // spread operator
  // rest operator
  // destructuring

  // learn spread operator
  const bros1: string[] = ["Mir", "Farsi", "Tommy"];
  const bros2: string[] = ["William", "Gilman", "Nah"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Alex",
    redux: "Mic",
    javascript: "Tommy",
  };

  const mentors2 = {
    prisma: "William",
    cloud: "Alex",
    aws: "Green",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // learn rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Green", "Alex", "Farsi");
}
