$('#home').live('pagebeforecreate',function(event){
	//Check with localStorage to see if there is any account yet
	var account = $.Storage.get("account");
	// alert(account);
	if (account==null) { //if no account yet
		window.location.href = "http://localhost/uejm/createaccount.html";
	} else {
		if (account.size>0) {
			alert(account);
		}
	}
});

$(document).ready(function() {
	$(document).bind("mobileinit", function(){
    	$.mobile.page.prototype.options.domCache = true;
    });
});