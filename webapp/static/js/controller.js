function AppCtrl($scope) {
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
}