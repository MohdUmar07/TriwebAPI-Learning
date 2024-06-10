//javascript file for 3 toggelfile from outside



var h1Tag = document.querySelector('h1');
	var btnTag = document.querySelector('button');
	
	btnTag.onclick = function(){
		var content = h1Tag.textContent ;
		console.log(content);
		if (content == 'Hi'){
			h1Tag.textContent = 'Hello';
			
		}
		else{
			h1Tag.textContent = 'Hi';
		}
		
	}


