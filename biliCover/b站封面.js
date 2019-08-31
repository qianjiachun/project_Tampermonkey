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
	let newret = document.createElement("a");
	newret.href = imgUrl;
	newret.target = "_blank";
	newret.innerHTML = "查看封面&nbsp&nbsp";
	newret.style.color = "red";
	let ret = document.getElementsByClassName("video-data")[0];
	ret.insertBefore(newret,ret.childNodes[0])

}
(function() {
	'use strict';
	
	getImgUrl();
	setTimeout(insertEl, 3000);//直接加载会导致评论加载不出来
})();
