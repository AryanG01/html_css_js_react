console.log("DOM Manipulation");
console.log(document);

let mainElement = document.getElementById("main");
console.log(mainElement);

let rightElement = document.getElementById("right");
console.log(rightElement);

console.log(rightElement.innerHTML);

let layoutElements = document.getElementsByClassName("layout");
console.log(layoutElements);
console.log(layoutElements[2]);

let tagElements = document.getElementsByTagName("li");
console.log(tagElements);
console.log(tagElements[2]);
console.log(tagElements[2].innerHTML);
tagElements[2].innerHTML = "MyOrders";

let fullName = document.getElementById("fullName");
console.log(fullName.value);

//let selectorQuery = document.querySelector('section');//returns the 1st matching instance
//console.log(selectorQuery);

//let selectorQuery = document.querySelector('.layout');//returns the 1st matching instance
//console.log(selectorQuery);

//let selectorQuery = document.querySelector('#left');//returns the 1st matching instance
//console.log(selectorQuery);

//let selectorQuery = document.querySelector('#left > ul');//returns the 1st matching instance
//console.log(selectorQuery);

// let selectorQuery = document.querySelector('#left > ul > li');//returns the 1st matching instance
// console.log(selectorQuery);

// let selectorQuery = document.querySelector('#left > .left-menu > li');//returns the 1st matching instance
// console.log(selectorQuery);

let selectorQuery = document.querySelectorAll("#left > .left-menu > li"); //returns all the matching instance
console.log(selectorQuery[1].innerText);
selectorQuery[1].innerText = 'blah blah blah'
selectorQuery[1].style.color = "red"; //makes the font color to red
