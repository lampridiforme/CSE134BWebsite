//TODO 
// the local storage does not work!
function addToCart(name, price, img){
	alert('Added to Cart!');
	//var storedNames = JSON.parse(localStorage.getItem("names"));
	list.push(new dish (name, price, img));
	updateCartNum();
}

function updateCartNum(){
	var number = localStorage.getItem("cartNumber");
	number++;
	alert(number);
	var newcart = "Cart (" + number + ")"
	document.getElementById("cart").innerHTML = newcart;
	localStorage.setItem("cartNumber", number);
}


function showCartNum(){
	var number = localStorage.getItem("cartNumber");
	alert("on load, number is " + number);
	var para = document.getElementById("cartlogout");
	var a = document.createElement("A");
	a.setAttribute("href", "./cart.html");
	a.setAttribute("id", "cart");	
	var t = document.createTextNode("Cart (" + number + ")");
	a.appendChild(t);
	para.appendChild(a);
}




