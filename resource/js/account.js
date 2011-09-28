$(document).ready(function() {
	
	$(document).bind("mobileinit", function(){ $.mobile.page.prototype.options.domCache = true; }); //initialize jQuery mobile
	
	//get current mobile number from localStorage
	var mobileNumber = $.Storage.get("mobileNumber");
	
	//cache div currentMobileNumber
	var currentMobileNumber = $("#currentMobileNumber");
	
	//and display it
	currentMobileNumber.html('Current mobile number: ' + mobileNumber);
	
	//cache updateAccountButton
	var updateAccountButton = $("#updateAccountButton");
	
	//when update account button is tapped/clicked on
	updateAccountButton.live('tap click',function(event,ui) {
		
		var newMobileNumber = $("#newMobileNumber"); //cache the text field
		var newNumber = newMobileNumber.val();
		
		if (newNumber!='') { //if new mobile number entered (i.e new Mobile number field not empty)

			$.Storage.set('mobileNumber',newNumber); //override the mobile number with the new one in localStorage

			$(this).simpledialog({
			    'mode' : 'string',
				'inputPassword': true,
				'useModal': true,
			    'prompt' : 'A SMS has been sent to you. Please enter the verification code in it',
			    'buttons' : {
			    	'OK': {
			        	click: function () {
							//re-cache the DOM variables and value
							newMobileNumber = $("#newMobileNumber");
							newNumber = newMobileNumber.val();
							
							var message; //to store the respective message for displaying later

							if (updateAccountButton.attr('data-string')!='') { //if something is entered into verification field
								currentMobileNumber.html("Current mobile number: " + newNumber);
								newMobileNumber.val(''); //empty the new mobile number text field
								message = "Your mobile number has been updated";
							} else { message = "Invalid verification number"; }
							
							//show new dialog indicating that mobile number has been updated / verification number error
							$(document).simpledialog({
								'mode': 'bool',
								'prompt' : message,
								'buttons' : {
									'OK' : {
										click: function() {}
									}
								}
							});
			        	}
				   	},
					'Cancel' : {
						click: function () { return false; }
					}
			    }
			});
			
			// updateAccountButton.props('data-string','');
			
			// $.mobile.changePage('accountsaved.html','pop',false,true); //display the pop up dialog upon saved
		} else { return false; }
	});
});
