function encurtarUrl(){
	let url = document.getElementById('input-url').value;
	if(!url) {
		alert("Url Inexistente");
		return;
	}

	//api: 30b70a72e9d34a4bbadb8a26f0cc2d5e

	let headers = {
		"Content-Type": "application/json",
		"apiKey": "30b70a72e9d34a4bbadb8a26f0cc2d5e"
	}

	let linkRequest = {
		destination: url,
		domain: { fullName: "rebrand.ly" }
	}

	fetch("https://api.rebrandly.com/v1/links", {
		method: "POST",
		headers: headers,
		body: JSON.stringify(linkRequest)
	})
		.then(response => response.json())
		.then(json=> {
			console.log(json);
			let inputUrl = document.getElementById('input-url');
			inputUrl.value = json.shortUrl;
		})
}

function copiar() {
	let inputUrl = document.getElementById('input-url');

	inputUrl.select();
	inputUrl.setSelectionRange(0, 9999);
	document.execCommand("copy");

	navigator.clipboard.writeText(inputUrl.value);

	alert(`URL copiada: ${inputUrl.value}`);


}