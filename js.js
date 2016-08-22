/**
 * Created by borisayupov on 3/13/15.
 */
window.onload = function () {

  var firstLatlng = new google.maps.LatLng(37.326650, -121.938010);
  //var secondLatlng = new google.maps.LatLng(37.321235, -122.054849);
  //var canvasCenter = new google.maps.LatLng(37.351235, (-121.938010-122.054849)/2);
  var canvasCenter = new google.maps.LatLng(37.351235, -121.938010);
  var mapOptions = {
    zoom: 10,
    center: canvasCenter
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // To add the marker to the map, use the 'map' property
  var marker = new google.maps.Marker({
    position: firstLatlng,
    map: map,
    title: "120 Ciro Ave, San Jose, CA"
  });
  //var marker2 = new google.maps.Marker({
  //  position: secondLatlng,
  //  map: map,
  //  title: "10141'A' Pasadena Ave, Cupertino, CA"
  //});

};
jQuery(document).ready(function(){
  jQuery('.songs_list').find('li').click(function() {
    var song_id = jQuery(this).attr("id");
    var song_src = "https://www.youtube.com/embed/"+ song_id;
    jQuery('#video').attr('src', song_src);
  });
});
