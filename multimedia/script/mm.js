function playSrc(file, img) {
    var videoref=document.getElementById('player');
    videoref.poster=img;
    videoref.src=file;
}

function play() {
    var videoref=document.getElementById('player');
    videoref.play();
}

function pause() {
    var videoref=document.getElementById('player');
    videoref.pause();
}

function mute() {
    var videoref=document.getElementById('player');
    videoref.muted = true;
}

function incVol() {
    var videoref=document.getElementById('player');
    videoref.volume= videoref.volume+1;
}

function unmute() {
    var videoref=document.getElementById('player');
    videoref.muted = false;
}

function decVol() {
    //videoref.volume--;
    var videoref=document.getElementById('player');
    videoref.volume= videoref.volume-1;
}

function adjustVolume(val){
    var videoref=document.getElementById('player');
    videoref.volume = val;
}