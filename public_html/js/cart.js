// get the list from sessionStorage first
let list = sessionStorage.getItem("list");
var l = JSON.parse(sessionStorage.getItem("list"));

function remove(e, index){
	
	console.log("e: " + e);
	console.log("index: " + index);

	// update to most recent list
	l = JSON.parse(sessionStorage.getItem("list"));

	// for checkout payment
	var price = l[index].price;
	updateTotal(-price);

	// hide div
	e.parentNode.parentNode.parentNode.style.display='none';

	// remove element from list
	l.splice(index, 1);

	// store this new list
	sessionStorage.setItem("list", JSON.stringify(l));

	//console.log(sessionStorage.getItem("cartNumber"));
	//update the local storage
	sessionStorage.setItem("cartNumber", sessionStorage.getItem("cartNumber")-1);
}

function calcNewIndex(list) {
	// assuming list is an array of dishes
	for(let i = 0; i < list.length; i++) {
		list[i].index = i;
	}
	return list;
}

function createTotal (newprice){
	var total = document.getElementById("total");

	var para = document.createElement("P");
	para.setAttribute("id","subtotal");
	var t = document.createTextNode("Subtotal: $0.00" );
	para.appendChild(t);
	total.appendChild(para);

	var para = document.createElement("P");
	para.setAttribute("id","estTax");
	var t = document.createTextNode("Estimated Tax: $0.00");
	para.appendChild(t);
	total.appendChild(para);

	var para = document.createElement("P");
	para.setAttribute("id","deliv");
	var t = document.createTextNode("Delivert Fee: $5.00");
	para.appendChild(t);
	total.appendChild(para);

	var para = document.createElement("P");
	para.setAttribute("id","estTotal");
	var para2 = document.createElement("B");
	var t = document.createTextNode("Estimated Total:     $"+(5*1.08));
	para2.appendChild(t);
	para.appendChild(para2);
	total.appendChild(para);
}

var curTotal = 0;

function updateTotal( price){
	curTotal=(curTotal+ price);

	var subt = "Subtotal: $" + curTotal.toFixed(2);
	document.getElementById("subtotal").innerHTML = subt;

	var newTax = (curTotal*0.08).toFixed(2);
	var tax = "Estimated Tax: $" + newTax;
	document.getElementById("estTax").innerHTML = tax;

	var totnumber = (5+curTotal*1.08).toFixed(2);
	var tot = "Estimated Total:     $"+totnumber;
	document.getElementById("estTotal").innerHTML = tot;
}


function dish(name, price, img, index){
	this.name = name;
	this.price=price;
	this.img= img;
	this. index = index;
}

var index=0;

function addElement(name, price, img){
	var li = document.createElement("li");
	var div1 = document.createElement("div");
	div1.id = name;
	div1.className = "selection";

	//p
	var para = document.createElement("P");
	var t = document.createTextNode(name);
	para.appendChild(t);
	div1.appendChild(para);

	//img
	var showimg = document.createElement("IMG");
	showimg.setAttribute("src", img);
    showimg.setAttribute("alt", "alt=a picture of the product");
	div1.appendChild(showimg);

	//div quantity
	var div2 = document.createElement("div");
	div2.className = "quantity";

	//form
	var form = document.createElement("FORM");
	form.setAttribute("action", "/action_page.php");

	//span
	var span = document.createElement("SPAN");
	var t = document.createTextNode("Quantity:");
	span.appendChild(t);
	form.appendChild(span);

	//input 
	var input = document.createElement("INPUT");
	input.setAttribute("type", "number");
	input.setAttribute("name", "quantity");
	input.setAttribute("min", "0");
	input.setAttribute("max", "99");	
	form.appendChild(input);

	div2.appendChild(form);

	//removeItem
	var div3 = document.createElement("div");
	div3.className = "removeItem";
	//remove button
	var button = document.createElement("BUTTON");
	console.log("a index: " + index);
	button.setAttribute("onclick", "remove(this," + index +")");
	var t = document.createTextNode("remove");
	button.appendChild(t);
	div3.appendChild(button);

	div2.appendChild(div3);

	div1.appendChild(div2);

	//p
	var para = document.createElement("P");
	para.className = "e1";
	var t = document.createTextNode("totoal price is "+ price);
	para.appendChild(t);
	div1.appendChild(para);

	//append to the ul list
	li.appendChild(div1);
	document.getElementById("myUL").appendChild(li);

	updateTotal(price);
	l.push(new dish(name, price, img, index++));

}


function showCart(){
	var i=0;
	var number = l.length;
	for (i=0;i<number;i++){
		addElement(l[i].name, l[i].price, l[i].img);
	}
}



