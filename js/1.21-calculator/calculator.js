const calculate = () => {
    let opr = document.querySelector("#operation").value; 
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);  

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter a valid number");
        return;
    }
    
    let result = 0;
    switch (opr) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "mul":
            result = num1 * num2;
            break;
        case "div":
            result = num1 / num2;
            break;
    }

    document.querySelector("#result").innerHTML = `Result is ${(result).toFixed(2)}`;
            
    //debugger;
}