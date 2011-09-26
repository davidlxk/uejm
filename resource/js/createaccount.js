$(document).ready(function() {

	$(document).bind("mobileinit", function(){

		$.mobile.page.prototype.options.domCache = true;

	});
	
	$("#createButton").live('tap click',function(event,ui) {
		var mobileNumber 	= $("#mobileNumber").val();
		var cardNumber		= $("#cardNumber").val();
		var defaultValue	= $("#defaultTopupValue").val();

		if (mobileNumber!='' && cardNumber!='') {
			$.Storage.set({ "account":"account one",
			 				"mobileNumber":mobileNumber, 
							"cardNumber":cardNumber, 
							"defaultValue":defaultValue,
							"cardQuantity":1 });
			window.location.href = "http://localhost/uejm/index.html";
							
			// window.location.href = "http://westerncircuit.com/test/xk/index.html";
		} else { return false; }

	});
	
});