//TODO 
// the local storage does not work!
//let list = [];
//sessionStorage.setItem("cartNumber", 0);

function addToCart(name, price, img){
	var list = JSON.parse(sessionStorage.getItem("list"));
	if (list==null){
		list = [];
	}
	list.push(new dish (name, price, img));
	sessionStorage.setItem("list", JSON.stringify(list));
	updateCartNum();
}

function updateCartNum(){
	var number = sessionStorage.getItem("cartNumber");-
	number++;
	var newcart = "Cart (" + number + ")"
	document.getElementById("cart").innerHTML = newcart;
	console.log("setting sessionStorage to new cart value");
	sessionStorage.setItem("cartNumber", number);
	console.log("localstore is now " + sessionStorage.getItem("cartNumber"));
}


function showCartNum(){
	var number = sessionStorage.getItem("cartNumber");
	if (number==null){
		number=0;
	}
	console.log("on load, number is " + number);
	var para = document.getElementById("cartlogout");
	var a = document.createElement("A");
	a.setAttribute("href", "./cart.html");
	a.setAttribute("id", "cart");	
	var t = document.createTextNode("Cart (" + number + ")");
	a.appendChild(t);
	para.appendChild(a);
}




