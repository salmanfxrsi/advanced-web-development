// destructuring

const user = {
  id: 345,
  name: {
    firstName: "Salman",
    lastName: "Farsi",
  },
  contactNo: "01754800757",
  address: "Bangladesh",
};

const {
  contactNo,
  name: { firstName: fName, lastName: lName },
} = user;

// array destructuring
const myFriends = ["farsi", "rock", "green", "rachel", "red", "tommy"];
const [, , , bestFriend, ...rest] = myFriends;
