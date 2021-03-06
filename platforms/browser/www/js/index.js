document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	document.querySelector("#playMp3").addEventListener("touchend", playMP3, false);
};

function playMP3() {
  //  var mp3URL = getMediaURL("sounds/button-1.mp3");

	var media = new Media("http://70.38.73.27:8005/stream", onSuccess, onError, status);    
	   media.setVolume(1.0);
}



function getMediaURL(s) {
    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}

function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}



function onDeviceReady() {
    document.querySelector("#playMp3").addEventListener("touchend", playMP3, false);
    document.querySelector("#playMp3Mild").addEventListener("touchend", playMp3Mild, false);
    document.querySelector("#playRemoteFile").addEventListener("touchend", playRemoteFile, false);

};


