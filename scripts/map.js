function init_map(){
    var myOptions = {
        zoom:13,center:new google.maps.LatLng(-22.9688813,-46.5338473),mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({
        map: map,position: new google.maps.LatLng(-22.9688813,-46.5338473)
    });
    infowindow = new google.maps.InfoWindow({
        content:'<strong> AzA Vital Studio </strong><br> MEU ENDEREÇO <br>'
    });google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map,marker);
    });infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', init_map);