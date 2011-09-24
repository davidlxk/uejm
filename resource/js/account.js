$(document).ready(function() {
	$(document).bind("mobileinit", function(){ $.mobile.page.prototype.options.domCache = true; });

	var mobileNumber = $.Storage.get("mobileNumber");
	$("#currentMobileNumber").html('Current mobile number: ' + mobileNumber);
	
	$("#updateAccountButton").live('tap click',function(event,ui) {
		var newNumber = $("#newMobileNumber").val();
		if (newNumber!='') { 
			$.Storage.set('mobileNumber',newNumber);
			$.mobile.changePage('accountsaved.html','pop',false,true);
		} else { return false; }
	});
});
