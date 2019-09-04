$(document).on("click","#mapa",function(){

function checkConnection() {
    var networkState = navigator.connection.type;
    if(navigator.connection.type == Connection.NONE){
      alert('No network connection')
      navigator.notification.beep(3);
      navigator.vibrate(6000);
    }
}

checkConnection();

navigator.notification.beep(1);

var onSuccess = function(position) {

L.mapquest.key = 'D3o5ypIT0OYsPf8GizJwViyaZAHmrlcT';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [position.coords.latitude, position.coords.longitude],
  layers: L.mapquest.tileLayer('map'),
  zoom: 15,
});
};

function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

navigator.geolocation.getCurrentPosition(onSuccess, onError);

});