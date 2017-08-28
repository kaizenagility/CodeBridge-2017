// 1. Write a function that adds three numbers.
// 2. Write a function that adds three numbers and divides result by 3.

var num1 = 5;
var num2 = 10;
var num3 = 15;

function sum(num1, num2, num3) {
	console.log(num1 + num2 + num3);
}

function avg(num1, num2, num3) {
	console.log((num1 + num2 + num3) / 3);
}

sum(num1, num2, num3);
avg(num1, num2, num3);