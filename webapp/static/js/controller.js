function AppCtrl($scope) {

    $scope.apiKey = 'AIzaSyBf9_6dgjtdzdn1lqYPWn209VPUN6Kv040';
    $scope.tableId = '1R55mklI2c8q7uhC0QxaGKZXGWN-KWfy9NMtlAHo';

    $scope.x = 100;
    $scope.r = Math.pow(3, -1/2);
    $scope.s = 1/5;

    $scope.prices = {
        'day-pass': 199,
        'week-pass': 999,
        'flexi': {
            '5': 999,
            '10': 1899,
            '20': 3599
        },
        member: {
            daily: 199,
            weekly: 999,
            monthly: 3499,
            quarterly: 8999,
            'half-yearly': 15999,
            yearly: 27999
        },
        'add-on': {
            'small-office': {
                weekly: 899,
                monthly: 3149,
                quarterly: 8399,
                'half-yearly': 14999,
                yearly: 26999
            },
            'large-office': {
                weekly: 1199,
                monthly: 4199,
                quarterly: 11199,
                'half-yearly': 19999,
                yearly: 35999
            },
            'locker': {
                weekly: 69,
                monthly: 279,
                quarterly: 749,
                'half-yearly': 'free',
                yearly: 'free'
            }
        },
        meeting: {
            hourly: 100,
            'half-day': 320,
            'full-day': 600
        }
    };

    $scope.getPrivateOfficePlusMembershipPrice = function(officeSize, noOfMembers, duration) {
        return $scope.prices['add-on'][officeSize][duration] +
               noOfMembers * $scope.prices['member'][duration];
    };

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
    $scope.placeTypes = ['coffee', 'restaurant', 'accommodation', 'bakery', 'store', 'alcohol'];

    $scope.places = [];

    // Initialize arrays to store markers
    $scope.markers = {};
    angular.forEach($scope.placeTypes, function(placeType) {
        $scope.markers[placeType] = [];
    });

    $.get('https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20Name,Location,Type%20FROM%20' + $scope.tableId +
        '&key=' + $scope.apiKey, function(data, textStatus, jqXHR) {
            $scope.places = data.rows;
            angular.forEach($scope.places, function(place) {
                var type = $scope.getSimplifiedPlaceType(place[2]),
                    latLng = place[1].split(','),
                    lat = parseFloat(latLng[0]),
                    lng = parseFloat(latLng[1]),
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(lat, lng),
                        title: place[0],
                        icon: $scope.getMarkerIconPath(type)
                    });
                $scope.markers[type].push(marker);
                marker.setMap($scope.map);
            });
        });

    $scope.getMarkerIconPath = function(simplifiedType) {
        var iconPath = '/static/images/';
        switch (simplifiedType) {
            case 'coffee':
                return iconPath + '1358717663_kteatime.png';
            case 'store':
                return iconPath + '7-11-logo.jpg';
            case 'restaurant':
                return iconPath + 'monotone_fork_spoon_eat_launch_restaurant_dinner.png';
            case 'accommodation':
                return iconPath + 'hotel_icon.png';
            case 'alcohol':
                return iconPath + 'drink_bar_cocktails.png';
            case 'bakery':
                return iconPath + 'icon-4-124_orange.gif';
        }
    };

    $scope.getSimplifiedPlaceType = function(type) {
        var lowerCaseType = type.toLowerCase();
        switch (lowerCaseType) {
            case 'dinner':
                return 'restaurant';
            case 'apartment':
            case 'hotel':
            case 'condo':
            case 'residence':
            case 'resort':
            case 'guest house':
                return 'accommodation';
            case 'pub&restaurant':
            case 'bar&restaurant':
            case 'cafe':
            case 'bar':
            case 'bar&pub':
            case 'food&drink':
            case 'coffee,bar,cuisine':
                return 'alcohol';
            case 'convenience store':
                return 'store';
            default:
                return lowerCaseType;
        }
    };

    $scope.markerFilters = {
        coffee: true,
        restaurant: true,
        alcohol: true,
        store: true,
        accommodation: true
    };

    angular.forEach($scope.placeTypes, function(placeType) {
        $scope.$watch('markerFilters.' + placeType, function(newValue) {
            angular.forEach($scope.markers[placeType], function(marker) {
                marker.setVisible(newValue);
            });
        });
    });

//    $scope.$watch('markerFilters.coffee', function(newValue, oldValue) {
//        angular.forEach($scope.markers['coffee'], function(marker) {
//            marker.setVisible(newValue);
//        });
//    });
}