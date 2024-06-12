function display(empName, empDept){
    console.log("Name: "+empName+ " & Department: "+empDept);
}
//display("John", "Phy");
//display("Peter", "Chemistry");

//setTimeout(display, 4000);
//setTimeout(display, 4000, "John", "PHY");//this function helps us execute only once another function after a certain time(in ms)

setTimeout(function(){
    document.querySelector('#bodyTag').style.backgroundColor = 'blue';
}, 6000);

//send otp, otp should expire in 30 secs, but user enters the otp within 30secs
// than you want to cancle the setTimeout so that otp should not expire
let timeoutId = setTimeout(display, 10000, "John", "PHY");
console.log(`Timeout Id is: ${timeoutId}`);

//let's cancel the 10sec timeout with the help of timeoutId
clearTimeout(timeoutId);
