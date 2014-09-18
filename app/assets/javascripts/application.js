// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .


/*
$('#sound').trigger('play');
*/

///Main Menu Page
$(document).ready(function($) {
    $('#start').modal();
});


$(window).load(function(){
   function hide_popup(){
      $('#start').modal('hide');
      playGame();
   };
   window.setTimeout( hide_popup, 10000 ); // 5 seconds
});



///Main Menu Page
$(function () {
 $(".btn").popover({
        placement: 'right',
        trigger: "hover",
        html : true
 });
});




///GAMEPLAY CODE
function endGame() {
	//$('#quit').click();
	$('#info').modal();
}

function playGame() {
	$('#sound').trigger('play');

// TUPLES FORMAT: Left=1 | Right=2, straight=1 | curve=2, 200 (windowSpan), ABSOLUTE frame duration (30 frames/s)
			var tuples = [[2, 1, 200, 180, 6], [1, 2, 200, 300, 10], [1, 1, 200, 420, 14], [2, 2, 200, 540, 18], [1, 1, 200, 720, 24], [2, 2, 200, 840, 28], [1, 1, 200, 1080, 36], [2, 1, 200, 1200, 40], [1, 2, 200, 1320, 44], [2, 1, 200, 1500, 50], [1, 1, 200, 1680, 56], [2, 2, 200, 1860, 62], [2, 1, 200, 1980, 66], [1, 2, 200, 2100, 70], [2, 1, 200, 2220, 74], [1, 2, 200, 2400, 80], [2, 1, 200, 2520, 84], [1, 2, 200, 2700, 90]];


			var score = 0;
			//var tuples = [[1, 1, 200, 90], [2, 2, 200, 150]];

			var holder = [];
			for (var t = 0; t < tuples.length; t++) {
				holder[t] = t;
			}

			var next = holder[1];
			var current = holder[0];
			var currentTime = (tuples[0][3] / 30);
			var dirDecoder = ["", "LEFT", "RIGHT"];
			var curDecoder = ["", "STRAIGHT", "CURVE"];
			var currentDir = dirDecoder[tuples[0][0]];
			var currentCur = curDecoder[tuples[0][1]];

			var myVar = setInterval(function() {
				THEfinalCountDown()
			}, 1000);

			function THEfinalCountDown() {
				var times = [];
				var last = 0;
				for (var a = 0; a < tuples.length; a++) {
					var absolute = (tuples[a][3] / 30);
					var duration = absolute - last;
					times[a] = duration;
					last = absolute;
				}

				var directions = [];
				for (var b = 0; b < tuples.length; b++) {
					currDir = dirDecoder[tuples[b][1]];
					directions[b] = currDir;
				}

				var curves = [];
				for (var c = 0; c < tuples.length; c++) {
					currCur = curDecoder[tuples[c][1]];
					curves[c] = currCur;
				}

				for (var i = 0; i < holder.length; i++) {
					document.getElementById("L").onclick = function() {
						gradeClick();
					};
					/*document.getElementById("R").onclick = function() {
						gradeRclick()
					};*/

					document.getElementById("ins").innerHTML = "Click the <b>" + currentDir + "</b> button";

					// set the left or right image files
					if (currentDir == "LEFT") {
						//L.setAttribute("src", "/assets/game/Left_Color.png");
						//R.setAttribute("src", "/assets/game/Right_Gray.png");
						L.setAttribute("src", "/assets/game/Left_Gray.png");
					} else if (currentDir == "RIGHT") {
						//L.setAttribute("src", "/assets/game/Left_Gray.png");
						//R.setAttribute("src", "/assets/game/Right_Color.png");
						L.setAttribute("src", "/assets/game/Right_Gray.png");
					} else {
						//L.setAttribute("src", "/assets/game/Left_Gray.png");
						//R.setAttribute("src", "/assets/game/Right_Gray.png");
						L.setAttribute("src", "");
					}

					// set the straight or curve image files
					if (currentCur == "STRAIGHT") {
						//S.setAttribute("src", "/assets/game/Straight_Color.png");
						//C.setAttribute("src", "/assets/game/Curve_Gray.png");
						C.setAttribute("src", "/assets/game/Straight_Color.png");
					} else if (currentCur == "CURVE") {
						//S.setAttribute("src", "/assets/game/Straight_Gray.png");
						//C.setAttribute("src", "/assets/game/Curve_Color.png");
						C.setAttribute("src", "/assets/game/Curve_Color.png");
					} else {
						//S.setAttribute("src", "/assets/game/Straight_Gray.png");
						//C.setAttribute("src", "/assets/game/Curve_Gray.png");
						C.setAttribute("src", "");
					}
					//alert(holder[i]+", "+current);
					if (holder[i] == current) {
						//decrement the time for current
						currentTime -= 1;

						//if time for current == 0 set new current
						if (currentTime == 0) {
							document.getElementById("grade").innerHTML = "";
							current = next;
							currentDir = directions[i + 1];
							currentCur = curves[i + 1];
							next = holder[i + 2];
							currentTime = times[i + 1];
						}
						document.getElementById("demo").innerHTML = "time left: " + currentTime;

						function gradeClick() {
							if (currentTime > 3) {
								document.getElementById("grade").innerHTML = "TOO FAST";
							} else {
								document.getElementById("grade").innerHTML = "PERFECT!";
								if (L.getAttribute("src") == "/assets/game/Left_Gray.png") {
									L.setAttribute("src", "/assets/game/Left_Color.png");
								}else if (L.getAttribute("src") == "/assets/game/Right_Gray.png") {
									L.setAttribute("src", "/assets/game/Right_Color.png");
								}

								score += 10;
								console.log(score);
							}
						}

						function gradeLclick() {
							//if (currentDir == "LEFT") {
								gradeClick();
							//}
						}

						function gradeRclick() {
							if (currentDir == "RIGHT") {
								gradeClick();
							}
						}

					}

					if (currentDir == undefined || currentTime == undefined) {
						S.setAttribute("src", "/assets/game/GameOver.png");
						S.removeAttribute("class");
						
						var image_x = document.getElementById('C');
						image_x.parentNode.removeChild(image_x);
						
						var image_x = document.getElementById('L');
						image_x.parentNode.removeChild(image_x);
						
						var image_x = document.getElementById('R');
						image_x.parentNode.removeChild(image_x);
						
						document.getElementById("demo").innerHTML = "";
						document.getElementById("grade").innerHTML = "Score: 100";
						document.getElementById("ins").innerHTML = "";
						endGame();
					}
				}
			}
}




