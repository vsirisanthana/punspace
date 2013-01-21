function AppCtrl($scope) {

    $scope.apiKey = 'AIzaSyBf9_6dgjtdzdn1lqYPWn209VPUN6Kv040';
    $scope.tableId = '1R55mklI2c8q7uhC0QxaGKZXGWN-KWfy9NMtlAHo';

    $scope.x = 100;
    $scope.r = Math.pow(3, -1/2);
    $scope.s = 1/5;

    // Google Maps
    $scope.latLng = new google.maps.LatLng(18.793589, 98.972349);
    $scope.map = new google.maps.Map(document.getElementById('map_canvas'), {
        center: $scope.latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    });
    $scope.marker = new google.maps.Marker({
        position: $scope.latLng,
        title: 'Pun Space',
        icon: '/static/images/map_marker.png'
    });
    $scope.marker.setMap($scope.map);
//    $scope.marker.setAnimation(google.maps.Animation.BOUNCE);
//    google.maps.event.addListener($scope.marker, 'mouseover', function() {
//        $scope.marker.setAnimation(null);
//    });
//
//    google.maps.event.addListener($scope.marker, 'mouseout', function() {
//        $scope.marker.setAnimation(google.maps.Animation.BOUNCE);
//    });

//    $http.get('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20*%20FROM%201R55mklI2c8q7uhC0QxaGKZXGWN-KWfy9NMtlAHo&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ')
//        .success(function(data, status, headers, config) {
//            console.log('YES', data);
//        })
//        .error(function(data, status, headers, config) {
//            console.log('SUCK', data);
//        });


//    $scope.roastniyom = new google.maps.Marker({
//        position: new google.maps.LatLng(18.791880, 98.970211),
//        title: 'Roastniyom Coffee'
//    });
//    $scope.roastniyom.setMap($scope.map);
//
//    $scope.mingmitr = new google.maps.Marker({
//        position: new google.maps.LatLng(18.795460, 98.970812),
//        title: 'Mingmitr Coffee'
//    });
//    $scope.mingmitr.setMap($scope.map);

//    $scope.layer = new google.maps.FusionTablesLayer({
//        query: {
//            select: 'Location',
//            from: $scope.tableId
//            where: 'ST_INTERSECTS(Location, CIRCLE(LATLNG(18.793589, 98.972349), 300))'
//        }
//    });

//    google.maps.event.addListener($scope.layer, 'click', function(e) {

        // Change the content of the InfoWindow
//        e.infoWindowHtml = e.row['Text'].value;
//    });

//    $scope.layer.setMap($scope.map);
    $scope.places = [];

    $.get('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20Name,Location%20FROM%20' + $scope.tableId +
        '&key=' + $scope.apiKey, function(data, textStatus, jqXHR) {
            $scope.places = data.rows;
            angular.forEach($scope.places, function(place) {
                var latLng = place[1].split(','),
                    lat = parseFloat(latLng[0]),
                    lng = parseFloat(latLng[1]),
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(lat, lng),
                        title: place[0],
                        icon: '/static/images/1358717663_kteatime.png'
                    });
                marker.setMap($scope.map);
            });
        });
}