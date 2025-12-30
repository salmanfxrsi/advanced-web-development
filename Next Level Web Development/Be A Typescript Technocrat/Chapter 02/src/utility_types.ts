{
    // utility types

    type Person = {
        name: string;
        age: number;
        contactNo: string;
        email?: string;
    }

    // pick
    type NameAge = Pick<Person, "name" | "age">;

    // omit 
    type ContactInfo = Omit<Person, "name" | "age">

    // required
    type PersonRequired = Required<Person>;

    // partial 
    type PersonPartial = Partial<Person>;

    // read only
    type PersonReadOnly = Readonly<Person>;

    const person1: PersonReadOnly = {
        age: 18,
        contactNo: "93790575",
        name: "Farsi",
        email: "salmanfarsi9005@gmail.com",
    }

    // person1.name = "Tom"; 

    type MyObj = Record<string, number>;

    const objOne: MyObj = {
        a: 23,
    }

    //
}