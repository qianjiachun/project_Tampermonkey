let viewIcon = '<svg style="width:16px;height:16px" t="1566119680547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3494" width="128" height="128"><path d="M712.820909 595.224609C807.907642 536.686746 870.40537 437.74751 870.40537 325.549212 870.400378 145.753547 709.943392 0 511.997503 0 314.055363 0 153.599626 145.753547 153.599626 325.549212 153.599626 437.74751 216.092361 536.686746 311.179092 595.219615 149.961841 657.72608 31.268214 793.205446 5.334335 955.968198 1.926253 962.195123 0 969.212275 0 976.638899 0 1002.324352 22.919038 1023.151098 51.198627 1023.151098 79.476967 1023.151098 102.396005 1002.324352 102.396005 976.638899L102.396005 1023.151098C102.396005 817.669984 285.787009 651.099674 511.997503 651.099674 738.212992 651.099674 921.602746 817.669984 921.602746 1023.151098L921.602746 976.638899C921.602746 1002.324352 944.523034 1023.151098 972.801376 1023.151098 1001.07472 1023.151098 1024 1002.324352 1024 976.638899 1024 969.212275 1022.073747 962.195123 1018.659424 955.968198 992.731789 793.205446 874.038157 657.72608 712.820909 595.224609ZM511.997503 558.080262C370.618285 558.080262 256.000624 453.967732 256.000624 325.545467 256.000624 197.121954 370.618285 93.009424 511.997503 93.009424 653.386707 93.009424 767.993133 197.121954 767.993133 325.545467 767.993133 453.972726 653.386707 558.080262 511.997503 558.080262L511.997503 558.080262Z" p-id="3495"></path></svg>'
let hotIcon = '<svg style="width:16px;height:16px" t="1566119430182" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3302" width="128" height="128"><path d="M255.83 338.84C93.092 480.356 75.837 726.967 217.317 889.716s388.08 179.926 550.863 38.514 179.948-388.08 38.469-550.83S519.257 94.96 521.197 0c-56.964 84.64-228.94 267.227-148.224 491.091-82.7-22.871-99.888-101.624-117.143-152.25z" fill="#F96A6A" p-id="3303"></path></svg>'
let a = {
	view: "",
	showtime: "",
	hot: ""
}

let url = document.getElementsByTagName('html')[0].innerHTML;
let urlLen = ("$ROOM.room_id =").length;
let ridPos = url.indexOf('$ROOM.room_id =');
let rid = url.substring(ridPos+urlLen,url.indexOf(';',ridPos+urlLen));
rid = rid.trim();

function getRealViewer() {
	if(document.querySelector(".MatchSystemChatRoomEntry") != null){
		document.querySelector(".MatchSystemChatRoomEntry").style.display = "none";
	}
	$.get("https://www.douyu.com/swf_api/h5room/" + rid,function(retData){
		a.view = retData.data.online;
		a.view = '<span style="color:red">' + a.view + "</span>"
		a.view = "<div style='display: inline-block;' title='观看人数'>" + viewIcon + a.view + "</div>"
		a.hot = document.querySelector(".Title-anchorText").innerHTML;
		a.hot = '<span style="color:blue">' + a.hot + "</span>"
		a.showtime = timeStampTurnTime(retData.data.show_time);
		a.hot = "<div style='display: inline-block;' title='热度'>" + hotIcon + a.hot + "</div>"
		document.querySelector(".AnchorAnnounce").innerHTML =  a.view + "  " + a.hot + '<span style="float:right">' + "开播时间:" + a.showtime + "</span>";
	  });
}

function timeStampTurnTime(timeStamp){
    if(timeStamp > 0){
        let date = new Date();  
        date.setTime(timeStamp * 1000);  
        let y = date.getFullYear();      
        let m = date.getMonth() + 1;      
        m = m < 10 ? ('0' + m) : m;      
        let d = date.getDate();      
        d = d < 10 ? ('0' + d) : d;      
        let h = date.getHours();    
        h = h < 10 ? ('0' + h) : h;    
        let minute = date.getMinutes();    
        let second = date.getSeconds();    
        minute = minute < 10 ? ('0' + minute) : minute;      
        second = second < 10 ? ('0' + second) : second;     
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;       
    }else{
        return "";
    }

}

(function() {
	setTimeout(getRealViewer,3000);
	setInterval(getRealViewer,10000);
})()