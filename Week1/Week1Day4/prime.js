// for (i=1; i<20; i++) {
// 	for (j=2; j<20; j++) {
// 		if (i%j !== 0) {
// 			return true;
// 		}
// 		else {
// 			return false;
// 		}
// 	};
// }



// // function isPrime(num) {

// // if (num === 2) {
// //  return true;
// // }
// // else if(num > 1){
// // for (var i = 2;  i < num; i++) {

// //      if (num % i !== 0 ) {
// //      return true;
// //      }

// //      else if (num === i * i) {
// //      return false;
// //      }

// //      else {
// //      return false;
// //      }
// //  };
// //  }
// // else {
// //  return false;
// // }

// // };
// //  console.log(isPrime(121));


// if (i === 2) {
// 	console.log("Prime");
// }
// else if (i > 1){
// 	for (j = 2; j < i; j++) {
// 		if (i%j !== 0) {
// 			return true;
// 		}
// 		else if (i === j *1) {
// 			return true;
// 		}
// 		else {
// 			console.log("Prime");
// 		}
// 	}
// }

// ===========

// var i;
// var num;

// for (num=1; num <= 20; num ++) {
// 	for (i = 2; i <= 20; i++) {
// 		while (num%i !== 0) {
// 			return true;
// 		}
// 		else {
// 			console.log("Prime");
// 		}
// 	}
// }

// var num;

// for (num=0; num<=20; num ++)
// 	for (var i=2; i <= num; i++) {
// 		if (num % i === 0) {
// 			return true;
// 		} else {
// 			console.log("Prime");
// 		}
// 	return num>1;
// console.log("Prime");
// }

// =====

for (var num=2; num < 20; num++) {
	var found = false;
	for (var d=2; d < num && !found; d++) {
		if (num % d == 0)
			found = true;
	}
	if (!found) {
		console.log('Prime: ' + num);
	}
}


