//Create new variable. Assign array of your favorite TV shows.

var tvShows = [
	"Orange Is the New Black",
	"House of Cards",
	"The Office",
	"The Magic Schoolbus",
	"Xena: Warrior Princess"	
];

newShows = [];

for (i=tvShows.length-1; i>=3; i--) {
	newShows[4-i] = tvShows[i];
	console.log(newShows);
}