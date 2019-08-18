function killAD() {
	let topDiv = document.getElementById("content_left");
	let results = topDiv.children;
	for (let i = 0; i < results.length; i++) {
		if (results[i].innerHTML.indexOf(">广告</") != -1) {
			results[i].remove();
		}
	}
}

(function (){
	setInterval(killAD,500);
})()

