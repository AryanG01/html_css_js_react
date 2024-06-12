function add() {
    //prompt returns the input value
    //let num1 = prompt("Enter the value of 1st number");
    let num1 = prompt("Enter the value of 1st number", "2.5");
    num1 = parseFloat(num1);//convert String to Number
    alert(typeof(num1));
    let num2 = prompt("Enter the value of 2nd number");
    num2 = parseFloat(num2);//convert String to Number
    alert(typeof(num2));
    let result = num1 + num2;
    alert(`Result of adding ${num1} and ${num2} is ${result}`);//its used for notification purpose
    //alert does not return any value
}
add();

function deleteCart() {
    //confirm will help user to decide on an action
    let input = confirm("Are you sure you want to delete the cart?");

    if (input) {
        alert("Cart has been deleted successfully!");
    } else {
        alert("Cart cannot be deleted!");
    }
}
deleteCart();