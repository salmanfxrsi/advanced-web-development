{
    // union types
    type FrontendDeveloper = "goodDev" | "badDev" | "juniorDev" | "seniorDev";
    const devOne: FrontendDeveloper = "badDev";

    type User = {
        name: string;
        email: string;
        gender: "male" | "female";
        bloodGroup: "O+" | "A+" | "Ab+";
    }

    const user1: User = {
        name: "Farsi",
        email: "salmanfarsi9005@gmail.com",
        gender: "male",
        bloodGroup: "A+",
    }
}