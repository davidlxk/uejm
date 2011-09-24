$(document).ready(function() {

	$(document).bind("mobileinit", function(){

		$.mobile.page.prototype.options.domCache = true;

	});
	
	$("#createButton").live('tap click',function(event,ui) {
		var mobileNumber 	= $("#mobileNumber").val();
		var cardNumber		= $("#cardNumber").val();
		var defaultValue	= $("#defaultTopupValue").val();

		if (mobileNumber!='' && cardNumber!='') {
			var account = [ mobileNumber,cardNumber,defaultValue ]; 
			$.Storage.set('account',account);
			$.Storage.set({"account":"account one", "mobileNumber":mobileNumber, 
							"cardNumber":cardNumber, "defaultValue":defaultValue});
			window.location.href = "http://localhost/uejm/index.html";
		} else { return false; }

	});
	
});