var Person = /** @class */ (function () {
    function Person(name, age, hobbies, idNumber) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.idNumber = idNumber;
    }
    return Person;
}());
// Create instances of the Person class
var person1 = new Person("Sultan", 60, ["Reading", "Painting"], 123);
var person2 = new Person("Ahmed", 40, ["Reading", "Painting"], 456);
var person3 = new Person("Faizan", 30, ["Reading", "Painting"], 789);
var person4 = new Person("Usman", 20, ["Reading", "Painting"], 0); // Added missing idNumber
// Log the instances to the console
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to display car details
    Car.prototype.displayDetails = function () {
        return "Car Make: ".concat(this.make, ", Model: ").concat(this.model, ", Year: ").concat(this.year);
    };
    return Car;
}());
// Create an instance of the Car class
var myCar = new Car("Toyota", "Camry", 2020);
// Log the car details to the console
console.log(myCar.displayDetails());
