"use strict";

//Question 2:

 // This is how you get a random number between 50 and 100
 var coneInventory = Math.floor(Math.random() * 50) + 50;
 
 do { 
 	var conesToSell = Math.floor(Math.random() * 5) + 1;
 	// if we have that many left, subtract it from our inventory
	if (conesToSell <= coneInventory) {
 	console.log("Sold" + conesToSell + " cones...")
 	coneInventory = coneInventory - conesToSell;
 	} else {
 		console.log("I don't have enough!")
 	}
} while (coneInventory > 0);

 console.log("Sold all the cones!");


