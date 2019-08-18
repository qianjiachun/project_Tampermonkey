let imgUrl = "";
function getImgUrl() {
	let metaTags = document.getElementsByTagName("meta");
	for (let i = 0; i < metaTags.length; i++) {
		if (metaTags[i].attributes[1].value == "image") {
			imgUrl = metaTags[i].content;
			
		}
	}
}

function insertEl() {
	let ret = "";
	let newret = "";
	ret = document.getElementsByClassName("ops")[0].innerHTML;

	newret = '<a href="' + imgUrl + '"target="_blank">查看封面</a>';
	
	document.getElementsByClassName("ops")[0].innerHTML = ret + newret;
	
	addEventListener("DOMNodeInserted")
}
(function() {
	'use strict';
	
	getImgUrl();
	setTimeout(insertEl, 3000);
})();
