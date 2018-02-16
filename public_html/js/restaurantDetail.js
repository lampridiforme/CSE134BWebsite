//TODO 
// the local storage does not work!
let list = [];
//localStorage.setItem("cartNumber", 0);

function addToCart(name, price, img){
	console.log('Added to Cart!');
	//var storedNames = JSON.parse(localStorage.getItem("names"));
	list.push(new dish (name, price, img));
	localStorage.setItem("list", list);
	updateCartNum();
}

function updateCartNum(){
	var number = localStorage.getItem("cartNumber");
	number++;
	alert(number);
	var newcart = "Cart (" + number + ")"
	document.getElementById("cart").innerHTML = newcart;
	console.log("setting localstorage to new cart value");
	localStorage.setItem("cartNumber", number);
	console.log("localstore is now " + localStorage.getItem("cartNumber"));
}


function showCartNum(){
	var number = localStorage.getItem("cartNumber");
	console.log("on load, number is " + number);
	var para = document.getElementById("cartlogout");
	var a = document.createElement("A");
	a.setAttribute("href", "./cart.html");
	a.setAttribute("id", "cart");	
	var t = document.createTextNode("Cart (" + number + ")");
	a.appendChild(t);
	para.appendChild(a);
}




