//Populate new colors array, populated with cascading old favorite colors

var colors = ["sage green", "caribbean blue", "rusty earth red", "golden yellow", "mahogany brown"];
var i;
var new_colors = [];

for (i=0; i<colors.length; i++){
  //new_colors.push(colors[i]);
  new_colors[i] = colors[i];
  console.log("new colors array:", new_colors);
}