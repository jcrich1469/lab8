// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	console.log("Page ready");

	$(function(){

		$("div.box").bind("taphold",tapholdHandler);
		console.log("Handler ready");

		function tapholdHandler(event){
			$(event.target).addClass("taphold");
		}

	});

	initCamera();
 	initGestures();

 	initRSVPForm();
}

// init jQuery gestures  
function initGestures(){
	// add gestures listener here
	$(function(){
		$(".judge-img").bind("taphold",tapholdHandler);

		function tapholdHandler(event){

			var targetIDPrefix = event.target.id;
			console.log("got prefix: " + targetIDPrefix);
			console.log("Handler ready");
			//show bio
			$("#" + targetIDPrefix + "-bio").show();

		}
	});
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here

  	$("#rsvpForm").submit(function(e){

  		e.preventDefault();
  		console.log("submitting form...");

		var rsvpEmail = $('#rsvpEmail').val();

		//sending post request
		$.post('addRSVP', { rsvpEmail: rsvpEmail}, postCallback);

	});

	function postCallback(res){

		alert("RSVP form successfully submitted!");
		$("#rsvpEmail").val(''); //clear form

	}  
}