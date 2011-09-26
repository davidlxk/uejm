$(document).ready(function() {
	$(document).bind("mobileinit", function(){ $.mobile.page.prototype.options.domCache = true; }); //initialize jQuery mobile
	//get current mobile number from localStorage
	var mobileNumber = $.Storage.get("mobileNumber");
	//and display it
	$("#currentMobileNumber").html('Current mobile number: ' + mobileNumber);
	//when update account button is tapped/clicked on
	$("#updateAccountButton").live('tap click',function(event,ui) {
		var newNumber = $("#newMobileNumber").val();
		if (newNumber!='') { //if new mobile number entered
			$.Storage.set('mobileNumber',newNumber); //override the mobile number with the new one in localStorage
			$.mobile.changePage('accountsaved.html','pop',false,true); //display the pop up dialog upon saved
		} else { return false; }
	});
});
