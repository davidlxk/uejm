var account;
$('#home').live('pagebeforecreate',function(event){
	//Check with localStorage to see if there is any account yet
	account = $.Storage.get("account");
	// alert(account);
	if (account==null) { //if no account yet
		window.location.href = "http://westerncircuit.com/test/xk/createaccount.html";
	} // else {
	// 		if (account.size>0) {
	// 			alert(account);
	// 		}
	// 	}
});

$(document).ready(function() {
	$(document).bind("mobileinit", function(){
    	$.mobile.page.prototype.options.domCache = true;
    });

	// $(".linkToAccount").live('tap click',function(event,ui) {
	// 		$(".linkToHome").removeClass('ui-btn-active');
	// 		$(this).addClass('ui-btn-active');
	// 	});
	// $(".linkToAccount").live('tap click',function(event,ui) {
	// 		alert('test');
	// 		var mobileNumber = $.Storage.get("mobileNumber");
	// 		$("#currentMobileNumber").html(mobileNumber);
	// 	});
});