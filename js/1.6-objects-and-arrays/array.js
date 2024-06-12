//Array can keep more than one similar or non-similar items
let ageArray = [23, 34, 56, 31];//array of similar items
let names = ["John", "Peter", "Jane"];
let salaries = [5687.34, 16868.32, 2868.10];
let randomArray = [12, 12, "Peter", 5678.99];
console.log(randomArray);
console.log(salaries);
// console.log(typeof (salaries));
console.log(salaries.length);
salaries = salaries.sort();
console.log("******salaries after sorting without compare function*******");
console.log(salaries);
// it doesnt sort the array in ascending order because with a compare method it converts 
// each number to a string and sorts based on the UTF-16 code unit values of the strings. 
// As a result, "16868.32" comes before "2868.10" and "5687.34" because "1" is less than "2", and so on.
salaries = salaries.sort((a, b) => a - b);//compare function
console.log("******salaries after sorting with compare function*******");
console.log(salaries);
salaries.push(888888.88);//adds new item at end of array
console.log(salaries);

salaries.splice(salaries.length - 1, 1);//remove the last item
console.log(salaries);

console.log("******salaries after addition*******");
//removes the 2 items from 0 d=index and adds 777 and 888 in their place
console.log(salaries.splice(0, 2, 777, 888, 999));//index, no. of items to be removed or added
console.log(salaries);

console.log("******salaries after deletion*******");
console.log(salaries.splice(0, 2));//index, no. of items to be removed or added
console.log(salaries);

console.log(randomArray[2]);//gives item at 2nd index
console.log(randomArray[3]);//gives item at 3nd index i.e undefined

//let deptArray = new Array(4);//ite will create 4 empty items
let deptArray = new Array("Phy", "Chem", "Maths");
console.log(deptArray);
console.log(deptArray[0]);

console.log(typeof (deptArray));//Array in js is of type object

let student1 = {
    name: "Peter",
    rollNo: 567,
    age: 23
};
let student2 = {
    name: "John",
    rollNo: 123,
    age: 31
};
let students = [student1, student2]; //Array of objects
console.log(students)