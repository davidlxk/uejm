var newMobileNumberValue,
	verifyMobile;
	
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
	updateAccountButton.live('click',function(event,ui) {
		
		var newMobileNumber = $("#newMobileNumber"); //cache the text field
		newMobileNumberValue = newMobileNumber.val();
		
		if (newMobileNumberValue!='') { //if new mobile number entered (i.e new Mobile number field not empty)			
		
			$("#showDialog").trigger('click'); //trigger click event to show 'ask for verification number' dialog
			
		} else { return false; }
	});
	
	$("#verifyBtn").live('click',function() { //when verify button pop up dialog is clicked on
		
		verifyMobile = $("#verifyMobile"); //cache the ask verification number dialog
		
		if ($("#verificationNum").val()!="") { //if verify code is entered
			
			$.Storage.set('mobileNumber',newMobileNumberValue); //override the mobile number with the new one in localStorage
			$("#goToVerifyOkay").trigger('click'); //trigger click event to go to show verification okay dialog
			
		} else { //if no verify code entered or invalid code
			
			$("#goToVerifyError").trigger('click'); //trigger click event to go to show verification error dialog
		}
	});
	
	$("#verifyOkayClose").live('click',function() { //when verification is successful and user clicks on Ok on successful dialog
		
		$("#currentMobileNumber").html('Current mobile number: ' + newMobileNumberValue); //display new mobile number
		window.location.href = "http://localhost/uejm/index.html"; //redirect to index page when update successful

	});
});
