const numArray1 = [11, 22, 33];
const numArr2 = [99, 1, 44];

const newArray = [...numArray1, ...numArr2];
console.log(newArray); //spread operator joins arrays or adds new items to existing array

const newArr2 = [...numArray1, 66, 23];
console.log(newArr2);
