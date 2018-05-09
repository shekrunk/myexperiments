/**
 * 
 */

var socket = new WebSocket('ws://localhost:8080/websockets/WebSocket');

socket.onerror = function(event) {
	onError(event)
}

socket.onopen = function(event) {
	onOpen(event)
}


socket.onmessage = function(event) {
	onMessage(event)
}


function onMessage(event) {
	document.getElementById('messages').innerHTML += '<br/>' +event.data;
	socket.send('pushing data..............');
}

function onOpen(event) {
	document.getElementById('messages').innerHTML += '<br/>' + event.data;
}

function onError(event) {
	alert(event.data);
}

function start(){
	if(socket.readyState==2 || socket.readyState==3) {
		setTimeout(function(){
			socket.send('hello');
		}, 3000);
	}  
	socket.send('hello');
	return false;
}

function stop(){
	socket.send('bye');
	socket.close();
	return false;
}