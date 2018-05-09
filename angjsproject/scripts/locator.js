window.onload = getCoOrdinates();

function getCoOrdinates() {
    window.localStorage.clear();
    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.google.com/maps/api/js?key=AIzaSyDnCmx6XW6zNRAIaXIqkN8dlYElsSDNLjI&language=en';
    document.getElementsByTagName('head')[0].appendChild(js_file);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.error("No Support for Geo Location");
    }
}

function success(position) {
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOpts = {
        center: latlng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROAD,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeControl: true,
        mapTypeControlOptions: google.maps.MapTypeControlStyle.DEFAULT
    };

    var gmapArea = document.getElementById('map'),
        gmap = new google.maps.Map(gmapArea, mapOpts),
        marker = new google.maps.Marker({
            position: latlng,
            map: gmap,
            title: 'You are here!',
            animation: google.maps.Animation.DROP
        });

    //get location and prefill address input type
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        latLng: latlng
        },
        function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var scope = angular.element(document.getElementById('address')).scope(); //set value to ng model via angular
                scope.customerRegObj.address = results[0].formatted_address;
            }
        });
}

function error(err) {
    console.error(err);
}