var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://briwang.github.io/data.json');
ourRequest.onload = function(){
	console.log(ourRequest.responseText);
	
	
};
ourRequest.send();