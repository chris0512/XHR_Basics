const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener('load', function()  {
	console.log('It worked!!');
	JSON.parse(this.responseText);
	const data = JSON.parse(this.responseText);
	console.log(data);
	for(let planets of data.results){
		console.log(planets.name);
	}
});

firstRequest.addEventListener('error', () => {
	console.log("Error");
});

firstRequest.open("GET", "https://swapi.dev/api/planets/");
firstRequest.send();
console.log("Request sent");