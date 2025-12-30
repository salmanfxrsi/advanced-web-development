{
  // type guard using instance of

  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log(`I am making sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log(`I am barking`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string){
        super(name, species);
    }

    makeMew(){}
  }

  const isDog = (animal: Animal) => {
    return animal
  }



  //
}
