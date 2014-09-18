$(document).ready(function(){
  var video = document.getElementById("videoOutput");

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


        var playProcessing = Processing.getInstanceById('output');


        $('#play').click(function(){
          $('#start').modal('hide');
          playGame();
          console.log(playProcessing);
          playProcessing.draw();
        });

      },
      function(error) {
        alert("Couldn't access webcam.");
      }
    );
  
  }
<<<<<<< HEAD
  playProcessing = Processing.getInstanceById('output');
  
  $('#pause').click(function(){playGame();});
  $('#pause').click(function(){playProcessing.draw()});
=======
  
 
>>>>>>> fd5a1d0c22f35cc55bad336581dd8809fa30c7e0
  
});