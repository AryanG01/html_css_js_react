let empOne = { name: "John", age: 22, address: { city: "Xyz", pincode: 22334}};
console.log(empOne);

console.log(empOne.address.city);
let empStr = JSON.stringify(empOne);//converts JSON object to string
console.log(empStr);
console.log(empStr.length);
//console.log(empStr.address.city); //There are no longer attributes for address and city
console.log(empStr['address'['city']]);

let myObj = JSON.parse(empStr);//converts a valid json string to json object
console.log(myObj);
console.log(myObj.address.city);
