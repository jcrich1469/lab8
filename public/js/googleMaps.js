function initMap() {
	// add your code here
	//var ucsd_ltlng = {lat: 32.880, lng: -117.236};
	var ucsd_scc_location = {lat: 32.8788033, lng: -117.2364593}; 
	var map = new google.maps.Map(document.getElementById('map'), {
		center:  ucsd_scc_location,
		zoom: 15
	});

// There was a type here in googlemaps
	var marker = new google.maps.Marker({
		position: ucsd_scc_location,
		map: map,
		title: "SCC at UCSD"
	});
}