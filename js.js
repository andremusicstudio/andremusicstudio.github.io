/**
 * Created by borisayupov on 3/13/15.
 */
window.onload = function () {

  var firstLatlng = new google.maps.LatLng(37.326650, -121.938010);
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
};

var player1;
var player2;
var player3;
jQuery(document).ready(function(){
  jQuery('#list1').find('li').click(function() {
    var song_id = jQuery(this).attr("id");
    presetVideo(song_id, player1);
  });
});
jQuery(document).ready(function(){
  jQuery('#list3').find('li').click(function() {
    var song_id = jQuery(this).attr("id");
    presetVideo(song_id, player3);
  });
});
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('video-player1', {
    width: 683,
    height: 384,
    videoId: 'W86zz4nNW-U',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
  player2 = new YT.Player('video-player2', {
    width: 683,
    height: 384,
    videoId: 'jB09ohZYP8w',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
  player3 = new YT.Player('video-player3', {
    width: 683,
    height: 384,
    videoId: 'U72zjsnJHXQ',
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if(event.data==YT.PlayerState.ENDED) {
    player1.seekTo(0);
    player1.pauseVideo();
    player1.stopVideo();
    player2.seekTo(0);
    player2.pauseVideo();
    player2.stopVideo();
    player3.seekTo(0);
    player3.pauseVideo();
    player3.stopVideo();
  }
}
function presetVideo(video_id, player_var) {
  player_var.loadVideoById(video_id);
}
