let myImage = document.querySelector('img');
myImage.onclick = function() {
	let imgSrc = myImage.getAttribute('src');
	console.log(imgSrc);
	if(imgSrc == 'sp1.jpg'){
		myImage.setAttribute('src', 'sp2.jpg' );
	} else {
		myImage.setAttribute('src', 'sp1.jpg' );
	}
}

/*let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/img1.jpg') {
		myImage.setAttribute('src', 'images/img2.jpg');
		
	} else {
		myImage.setAttribute('src', 'images/img1.jpg');
	}*/