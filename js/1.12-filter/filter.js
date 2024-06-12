let ageArray = [16, 32, 12, 80, 54];

//I want all the people who are eligible for voting (age>18)
function checkEligibility(age) {
    return age > 18;
}
let eligibleArr = ageArray.filter(checkEligibility);
console.log("Eligible for voting");
console.log(eligibleArr);
function checkNonEligibility(age) {
    return age < 18;
}
let nonEligibleArr = ageArray.filter(checkNonEligibility);
console.log("Not Eligible for voting");
console.log(nonEligibleArr);
