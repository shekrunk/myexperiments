function notify() {
	if (!Notification) {
		alert('Desktop Notifications not available in your browser');
		return;
	}

	if (Notification.permission !== 'granted') {
		Notification.requestPermission();
		console.log('Requested Grant Permission for notification');
	} else if (Notification.permission === "granted") {
		// If it's okay let's create a notification
		var notification = new Notification('Title', {
			icon : 'images/tweet.jpg',
			body : "Hey There!!! Poke! Poke! Poke!"
		});

		notification.onclick = function() {
			notification.close();
			window.open('https://uat3.citibank.pl/apps/auth/signin/');
		}

		notification.onerror = function(err) {
			console.error(err);
		}
	}

}