// restaurants: array of restaurants that contains info for each entry (name, detailsrc, img)
// numred: number of restaurants to load
function displayRestaurants(restaurants, numrest) {
	for(let i = 0; i < numrest; i++) {

	}
}

// hardcoded version for debugging
function displayRestaurantsHard() {
	for(let i = 0; i < 3; i++) {
		displayRestaurantElemHard();
	}
}

// name: name of the restaurant (String)
// detailsrc: location of the detail page (String in format path/file.html)
// img: location of the image to use (String in format path/file.extension)
function displayRestaurantElem(name, detailsrc, img) {
	// create a div to hold the new restauruant info
	let rDiv = document.createElement("div");
	// html content for the div
	let info = "<div class='itemInfo'> <a href='" + detailsrc + "'> " +
		"<img src='" + img + "' alt='a picture of the restauruant'> </a>" +
		"<a href='" + detailsrc + "'> <p>" + name + "</p> </a> </div>";

	rDiv.innerHTML = info;

	// add information to the new div
	rDiv.className = "selection";

	// insert into html
	document.getElementById("rWrapper").appendChild(rDiv);
}

// hardcoded version for debugging
function displayRestaurantElemHard() {
	console.log("called");

	// create a div to hold the new restauruant info
	let rDiv = document.createElement("div");
	// html content for the div
	let info = "<div class='itemInfo'> <a href='./restauruantDetail.html'> <img src='./img/gelatin_steakhouse.jpg' alt='a picture of the restauruant'> </a> <a href='./restauruantDetail.html'> <p>Gelatin's Steakhouse</p> </a> </div>";

	rDiv.innerHTML = info;

	// add information to the new div
	rDiv.className = "selection";

	//console.log(document.getElementById("rWrapper"));
	console.log(rDiv);

	// insert into html
	document.getElementById("rWrapper").appendChild(rDiv);
}