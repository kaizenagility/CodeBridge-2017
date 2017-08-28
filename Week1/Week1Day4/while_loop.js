// // While loop countdown from 10 to 0

// i=10;

// while (i>=1) {
// 	console.log(i);
// 	i--;
// }

// // Multiples of 3, add 3, less than 35

// i = 0

// while (i<32) {
// 	console.log(i+=3);
// }

// // Another solution

// var i = 3;

// while (i <35) {
// 	console.log(i);
// 	i += 3
// }

// Run a block of code that says how many quarters Nando got back from vending machine for $6 cookie with $10

COST = 4.00;
PAYMENT = 10.00;

var Change = (PAYMENT - COST); 

var Quarters = 0;

console.log(Change);

while (Change > 0) {
	Change -= 0.25;
	Quarters += 1
}

console.log(Quarters);

// Kareem's solution:

// var Cost = 4;
// var Cash = 10;

// var Quarters = Cash-Cost;

// while (Quarters) {
// 	console.log(Quarters/0.25);
// 	Quarters = false;
// }

// Abrian's solution:

// var i = 4;
// var Change = 0;

// while (i<10) {
// 	Change += 4;
// 	i++;
// }
// console.log(Change);

// Patrick's solution:

// var count = 0;
// var i = 1000; 

// i = i-400;

// while (i>10) {
// 	console.log("i=")
// }

====

Shomir's Solution:

var i = 10;
var change = 0;
while (i>=4) {
	console.log(i);
	console.log("Change in quarters is " + change);
	i -= 0.25;
	change ++;
}


