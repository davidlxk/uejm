$(document).ready(function() {
	$(document).bind("mobileinit", function(){ $.mobile.page.prototype.options.domCache = true; }); //initialize jQuery mobile
	//get current mobile number from localStorage
	var mobileNumber = $.Storage.get("mobileNumber");
	//cache div currentMobileNumber
	var currentMobileNumber = $("#currentMobileNumber");
	//and display it
	currentMobileNumber.html('Current mobile number: ' + mobileNumber);
	//when update account button is tapped/clicked on
	$("#updateAccountButton").live('tap click',function(event,ui) {
		var newMobileNumber = $("#newMobileNumber"); //cache the text field
		var newNumber = newMobileNumber.val();
		if (newNumber!='') { //if new mobile number entered (i.e new Mobile number field not empty)
			$.Storage.set('mobileNumber',newNumber); //override the mobile number with the new one in localStorage
			$(this).simpledialog({
			    'mode' : 'bool',
			    'prompt' : 'Your account\'s mobile number has been updated',
			    'buttons' : {
			      'OK': {
			        click: function () {
			        	currentMobileNumber.html("Current mobile number: " + newNumber);
						newMobileNumber.val(''); //empty the text field
			        }
			      },
			    }
			  });
			
			// $.mobile.changePage('accountsaved.html','pop',false,true); //display the pop up dialog upon saved
		} else { return false; }
	});
});
