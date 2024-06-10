//javascript file for 5 test conection of page with js

var htmlTag = document.querySelector('html');
var h1Tag = document.querySelector('h1');


htmlTag.onclick = function(){
	h1Tag.textContent = "Hello clicked on html";
	alert("you clicked here");
}