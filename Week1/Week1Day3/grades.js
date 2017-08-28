var Score = 85;
// if (Score >= 90) {
// 	console.log("You get an A");
// }
// else if (80 <= Score < 90 ) {
// 	console.log("You get a B.");
// }
// else if (70 <= Score < 80) {
// 	console.log("You get a C.");
// }
// else if (55 <= Score < 70) {
// 	console.log("You get a D.");
// }
// else {
// 	console.log("You get a F.");
// }

(Score < 55) ? console.log("You get a F") : 
	((Score <= 70) ? console.log("You get a D") : 
		((Score <= 80 ) ? console.log("You get a C") : 
			((Score <= 90) ? console.log ("You get a B") : 
				console.log("You get an A")
			)	
		)
	)