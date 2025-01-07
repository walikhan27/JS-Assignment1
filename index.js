var subOne = +prompt("Enter your subject marks")
var subTwo = +prompt("Enter your subject marks")
var subThree = +prompt("Enter your subject marks")
var subFour = +prompt("Enter your subject marks")
var subFive = +prompt("Enter your subject marks")

var totalMarks = 300;

var obtainedMarks = subOne + subTwo + subThree + subFour + subFive;

alert("You've got " + obtainedMarks);

var userPercentage = (obtainedMarks / totalMarks) * 100;

alert("Your percentage is " + userPercentage)

if (userPercentage >= 90) {
    grade = "A+";
} else if (userPercentage >= 80) {
    grade = "A";
} else if (userPercentage >= 70) {
    grade = "B";
} else if (userPercentage >= 60) {
    grade = "C";
} else if (userPercentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}

alert("Your grade is " + grade)