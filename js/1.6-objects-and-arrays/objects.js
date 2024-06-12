let var1a = 22;
console.log("Type of 22 is " + typeof var1a);
let var1b = Number(22);
console.log("Type of Number(22) is " + typeof var1b);
let var1c = 40.67;
console.log("Type of 40.67 is " + typeof var1c);
let var2 = "John";
console.log("Type of 'John' is " + typeof var2);
let var3 = true;
console.log("Type of true is " + typeof var3);
let var4 = null;
console.log("Type of null is " + typeof var4);
let var5 = undefined;
console.log("Type of undefined is " + typeof var5);
let var6 = {};
console.log("Type of {} is " + typeof var6);
let var7 = [];
console.log("Type of [] is " + typeof var7);
let var8 = function () {};
console.log("Type of function(){} is " + typeof var8);
let var9 = new Date();
console.log("Type of new Date() is " + typeof var9);
let var10; //default of js variable is undefined...if(var5) => false
console.log("Type of var10 is " + typeof var10);

//Create my own Data type and its Object
let person = {
  name: "Aryan",
  age: 23,
  isAdult: true,
  hobbies: ["Reading", "Coding", "Gaming"],
  address: {
    city: "Singapore",
    country: "Singapore",
    postalCode: 123456,
  },
  "course name": "CS",
};

console.log(person);
console.log(typeof person);

console.log(person.name);
console.log(person["age"]);

console.log(person["course name"]);

//Add new property to object
person.email = "rajeevganju0@gmail.com";
console.log(person);

//Update property of object
person.name = "Ayush";

//Delete property of object
delete person.isAdult;
console.log(person);

//Object destructing
const { hobbies, age } = person;
console.log(hobbies);
console.log(age);
