'use strict';

// JQUERY //

$(document).ready(function(){

		var spaceCount = 0;
		var waterVideo = videojs('#water');
		var waterVideo2 = videojs('#water2');
		var treatVideo = videojs('#treatment');
		var treatVideo = videojs('#meditation');
		var waterVideo2 = videojs('#water3');
		var trailer = videojs('#trailer');
		var getaudio = $('#introSong')[0];
 	var mouseovertimer;
 	var audiostatus = 'off';

	// loader
		
		$('.loading').fadeOut(5000, function(){
				$.fn.fullpage.moveSectionDown();
		});
	
// fullpage.js plugin
	
	
		$('#fullpage').fullpage({
				css3: true,
				scrollingSpeed: 1000,
				fitToSection: true,
		});
	
	
		
		//disabling scrolling
				$.fn.fullpage.setAllowScrolling(false);
		//disabling all keyboard scrolling
				$.fn.fullpage.setKeyboardScrolling(false);
	
	
// mousetrap plugin for function of spacebar
	
		Mousetrap.bind('space', function(event) {
		spaceCount++;
				$('#enter').css('background', `linear-gradient(120deg, #c9c9c9 ${spaceCount}0%, transparent ${spaceCount}0%)`)
			if (spaceCount == 10){
				$.fn.fullpage.moveSectionDown();
			}
		});

	
//	AUDIO SPEAKER
	
		$(document).on('mouseenter', '.speaker', function() {
     
			// if the mouse hovers over the speaker image for more than 1 second the audio will start playing //
			
     if (!mouseovertimer) {
       mouseovertimer = window.setTimeout(function() {
         mouseovertimer = null;
         if (!$('.speaker').hasClass("speakerplay")) {
           getaudio.load();
           // Loads the audio //
           getaudio.play();
           // Play the audio (starting at the beginning of the track)//
           $('.speaker').addClass('speakerplay');
           return false;
         }
       });
      }
   });

   $(document).on('mouseleave', '.speaker', function() {
     /* If the mouse stops hovering on the image (leaves the image) clear the timer, reset back to 0 */
     if (mouseovertimer) {
       window.clearTimeout(mouseovertimer);
       mouseovertimer = null;
     }
   });

   $(document).on('click touchend', '.speaker', function() {
     /* Touchend is necessary for mobile devices, click alone won't work */
     if (!$('.speaker').hasClass("speakerplay")) {
       if (audiostatus == 'off') {
         $('.speaker').addClass('speakerplay');
         getaudio.load();
         getaudio.play();
         window.clearTimeout(mouseovertimer);
         audiostatus = 'on';
         return false;
       } else if (audiostatus == 'on') {
         $('.speaker').addClass('speakerplay');
         getaudio.play()
       }
     } else if ($('.speaker').hasClass("speakerplay")) {
       getaudio.pause();
       $('.speaker').removeClass('speakerplay');
       window.clearTimeout(mouseovertimer);
       audiostatus = 'on';
     }
   });

   $('#introSong').on('ended', function() {
     $('.speaker').removeClass('speakerplay');
     /*When the audio has finished playing, remove the class speakerplay*/
     audiostatus = 'off';
     /*Set the status back to off*/
   });

	
	
//	TITLE INTRO ANIMATION //
	
		(function(){
				// Initial container width
			var containerWidth = $('.title').outerWidth();
			var addEvent = function(object, type, callback) {
	    if (object == null || typeof(object) == 'undefined') return;
	    if (object.addEventListener) {
	        object.addEventListener(type, callback, false);
	    } else if (object.attachEvent) {
	        object.attachEvent("on" + type, callback);
	    } else {
	        object["on"+type] = callback;
	    }
		};
		function detectMouseMove() {
		$(document).bind('mousemove', function(e){
			$('.hover').css({
				 left:  e.pageX
			});
			$('.left-side').css({
				left: e.pageX + 75
			});
			var rightSideLeft = containerWidth - e.pageX;
			$('.right-side').css({
				right: rightSideLeft
			});

		});
	}
	detectMouseMove();
	// Detect container width after resizing
	addEvent(window, "resize", function(event) {
		var containerWidth = $('.title').outerWidth();
		$(document).bind('mousemove', function(e){
			$('.hover').css({
				 left:  e.pageX
			});
			$('.left-side').css({
				left: e.pageX + 75
			});
			var rightSideLeft = containerWidth - e.pageX;
			$('.right-side').css({
				right: rightSideLeft
			});
		});
	});
	
	document.addEventListener('touchmove', function(e) {
		var containerWidth = $('.title').outerWidth();
			$('.hover').css({
				 left:  e.pageX
			});
			$('.left-side').css({
				left: e.pageX + 75
			});
			var rightSideLeft = containerWidth - e.pageX;
			$('.right-side').css({
				right: rightSideLeft
			});
	}, false);
	
	
})();
	
	
	
///////// END JQUERY /////////
	
});


// videos play pause


var vid = document.getElementById("treatment"); 

function playVid() { 
    vid.play();
	document.getElementById("introSong1").pause();
} 

function pauseVid() { 
    vid.pause(); 
} 

var med = document.getElementById("meditation"); 

function playMed() {
	med.play();
	document.getElementById("introSong1").pause();
}

function pauseMed() {
	med.pause();
}

var trailer = document.getElementById("trailer");

function playTrailer() {
	trailer.play();
	document.getElementById("introSong1").pause();
}


function pauseTrailer(){
	trailer.pause();
}
 



// AUDIO intro autoplay timeout 

function playAudio() {
    document.getElementById("introSong1").play();
}

function playAudio() {
    document.getElementById("introSong2").play();
}

setTimeout("playAudio()", 6000);



// -------  menu bar ----------------

function menuBar(x) {
    x.classList.toggle("change");
}




