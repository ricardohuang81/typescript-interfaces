interface NamedPerson {
  firstName:string;
  age?:number;
  [propName:string]:any;
  greet(lastName:string):void;
}

function greet(person: NamedPerson) {
  console.log(`Hey ${person.firstName}!`);
}

function changeName(person: NamedPerson) {
  person.firstName = "Israel";
}

const person:NamedPerson = {
  firstName: "Jones",
  hobbies: ["MMA", "Yoga", "Hoops"],
  greet(lastName:string) {
    console.log(`Yo ${lastName}, get your ${this.firstName} ass over here!`);
  }
}

// greet({ firstName: "Dana", age: 50 });
console.log(person);
changeName(person);
person.greet("Black");

class Person implements NamedPerson {
  firstName:string;
  lastName:string;
  hobbies:string[];
  greet(lastName:string) {
    console.log(`Arroz con pollo mi ${this.firstName} yi tu mama tambien ${lastName}, my hobby is ${this.hobbies[0]}!`);
  }
}


const maPers = new Person();
maPers.firstName = "Nunes";
maPers.lastName = "Cyborg";
maPers.hobbies = ["MMA", "Yoga", "Hoops"];
greet(maPers);
maPers.greet(maPers.lastName);

// Function Types

interface DoubleValueFunk {
  (num1:number, num2:number):number;
}

let myDoubleFunk:DoubleValueFunk;

myDoubleFunk = function(val1:number, val2:number) {
  return (val1 + val2) * 2;
}

console.log(myDoubleFunk(3, 9));

// Interface Inheritance

interface AgedPerson extends NamedPerson {
  age:number;
}

const elder:AgedPerson = {
  age: 55,
  firstName: "Clint",
  greet(lastName:string) {
    console.log(`Hey old timer, ${lastName} and I'm only ${this.age}!`);
  }
}

elder.greet("Eastwood")
console.log(elder);