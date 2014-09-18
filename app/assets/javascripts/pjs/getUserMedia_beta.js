$(document).ready(function(){
  var video = document.getElementById("video");

  if (video) {
       var getUserMedia = function(t, onsuccess, onerror) {
        if (navigator.getUserMedia) {
          return navigator.getUserMedia(t, onsuccess, onerror);
        } else if (navigator.webkitGetUserMedia) {
          return navigator.webkitGetUserMedia(t, onsuccess, onerror);
        } else if (navigator.mozGetUserMedia) {
          return navigator.mozGetUserMedia(t, onsuccess, onerror);
        } else if (navigator.msGetUserMedia) {
          return navigator.msGetUserMedia(t, onsuccess, onerror);
        } else {
          onerror(new Error("No getUserMedia implementation found."));
        }
      };

    var URL = window.URL || window.webkitURL;
    var createObjectURL = URL.createObjectURL || webkitURL.createObjectURL;
    if (!createObjectURL) {
      throw new Error("URL.createObjectURL not found.");
    }

    getUserMedia({audio:false, video:true},
      function(stream) {

        var url = createObjectURL(stream);
        video.src = url;


        //instance = Processing.getInstanceById('output');
/*

        $('#play').click(function(){
          $('#start').modal('hide');
          playGame();
          //instance.draw();
        });
*/
      },
      function(error) {
        alert("Couldn't access webcam.");
      }
    );
  
  }
  
});






