class Person {
    name: string;
    age: number;
    hobbies: string[];
    idNumber: number;
  
    constructor(name: string, age: number, hobbies: string[], idNumber: number) {
      this.name = name;
      this.age = age;
      this.hobbies = hobbies;
      this.idNumber = idNumber;
    }
  }
  
  // Create instances of the Person class
  const person1: Person = new Person("Sultan", 60, ["Reading", "Painting"], 123);
  const person2: Person = new Person("Ahmed", 40, ["Reading", "Painting"], 456);
  const person3: Person = new Person("Faizan", 30, ["Reading", "Painting"], 789);
  const person4: Person = new Person("Usman", 20, ["Reading", "Painting"], 0); // Added missing idNumber
  
  // Log the instances to the console
  console.log(person1);
  console.log(person2);
  console.log(person3);
  console.log(person4);
  
  class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;   
    }
  
    // Method to display car details
    displayDetails(): string {
      return `Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
  }
  
  // Create an instance of the Car class
  const myCar: Car = new Car("Toyota", "Camry", 2020);
  
  // Log the car details to the console
  console.log(myCar.displayDetails());