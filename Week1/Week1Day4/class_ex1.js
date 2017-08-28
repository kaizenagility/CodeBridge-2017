// //Week1Day4 Class exercise #1 //

// var i;
// for (i=6; i<=100; i+=5) {
// 	console.log(i);
// }

// //2. Print even integers between 1 and 100. //

// var i;
// for (i=1; i<100; i++) {
// 	if (i%2 === 0) {
// 		console.log(i);
// 	}
// }

// //alternate solution//

// for (i = 2; i < 100; i+=2) {
// 	console.log(i);
// }

// Run a for loop that runs 0-100. Add five to all even numbers and print those.
// Add three to all odd numbers and print those.

var i;
for (i=0; i<100; i++) {
	if (i%2==0) {
		console.log(i+5);
	}
	else {
		console.log(i+3);
	}
} 