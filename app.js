// task 1
// //1
let userName = prompt("Enter your Name:");
let Gender;

while (true) {
  Gender = prompt("Enter Your Gender:");
  if (Gender === "male" || Gender === "female") {
    break;
  } else {
    alert("Invalid input. enter 'male' or 'female'.");
  }
}

if (Gender === "male") {
  alert(`Welcome, Mr. ${userName}!`);
} else if (Gender === "female") {
  alert(`Welcome, Ms. ${userName}!`);
}
let orderChoice = prompt("Would you like to order shawarma, zinger, or burger");
alert(`Your ${orderChoice} is being prepared.`);

// //2
let num = prompt("Enter your number from 0 to 10:");
switch (Number(num)) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  case 4:
    console.log("four");
    break;
  case 5:
    console.log("five");
    break;
  case 6:
    console.log("six");
    break;
  case 7:
    console.log("seven");
    break;
  case 8:
    console.log("eight");
    break;
  case 9:
    console.log("nine");
    break;
  default:
    console.log("TRY AGAIN");
}

// task 2
// 1
for (let i = 0; i <= 5; i++) {
  alert(i);
}

// 2
let number;

while (true) {
  number = prompt("enter a number between 0 and 100:");

  if (number >= 0 && number <= 100) {
    break;
  } else {
    alert("Invalid input. enter a number between 0 and 100.");
  }
}

alert(`You entered a valid number: ${number}`);

//2

let number2 = parseInt(prompt("enter an integer:"));

let sum = 0;

for (let i = 0; i <= number2; i++) {
  sum += i;
}

alert(`The sum of integers from 0 to ${number2} is: ${sum}`);
