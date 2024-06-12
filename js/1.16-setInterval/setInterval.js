
function display(empName, empDept) {
    console.log("Name: " + empName + " & Department: " + empDept);
}
//display("John", "Phy");
//display("Peter", "Chemistry");

//setInterval(display, 2000);
//setInterval(display, 4000, "John", "PHY");//this function helps us execute more than once another function after a certain time(in ms)
let count = 0;
setInterval(function () {
    count++;
    document.querySelector('#seconds').innerHTML = count;
    let color = `#${count}00${count}00`;
    document.querySelector('#textArea').style.backgroundColor = color;
}, 1000);


let intervalId = setInterval(display, 5000, "John", "PHY");
console.log(`Interval Id is: ${intervalId}`);

//let's cancel the 10sec timeout with the help of intervalId
clearInterval(intervalId);
