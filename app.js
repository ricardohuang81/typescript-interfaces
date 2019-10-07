"use strict";
function greet(person) {
    console.log("Hey " + person.firstName + "!");
}
function changeName(person) {
    person.firstName = "Israel";
}
var person = {
    firstName: "Jones",
    hobbies: ["MMA", "Yoga", "Hoops"],
    greet: function (lastName) {
        console.log("Yo " + lastName + ", get your " + this.firstName + " ass over here!");
    }
};
// greet({ firstName: "Dana", age: 50 });
console.log(person);
changeName(person);
person.greet("Black");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Arroz con pollo mi " + this.firstName + " yi tu mama tambien " + lastName + ", my hobby is " + this.hobbies[0] + "!");
    };
    return Person;
}());
var maPers = new Person();
maPers.firstName = "Nunes";
maPers.lastName = "Cyborg";
maPers.hobbies = ["MMA", "Yoga", "Hoops"];
greet(maPers);
maPers.greet(maPers.lastName);
var myDoubleFunk;
myDoubleFunk = function (val1, val2) {
    return (val1 + val2) * 2;
};
console.log(myDoubleFunk(3, 9));
var elder = {
    age: 55,
    firstName: "Clint",
    greet: function (lastName) {
        console.log("Hey old timer, " + lastName + " and I'm only " + this.age + "!");
    }
};
elder.greet("Eastwood");
console.log(elder);
