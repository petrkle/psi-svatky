$(document).ready(function() {

	var d = new Date();

	$('#bark').text(chrome.i18n.getMessage("bark"));
	$('#todayDate').text(chrome.i18n.getMessage("todayDate",d.getDate()+". "+(1 + d.getMonth()) + ". " + d.getFullYear()));

		var psi = svatky[d.getMonth()][d.getDate()]
		for (var i = 0; i < psi.length; ++i) {
			$('#svatky').append('<li>'+psi[i]+'</li>');
		}

});
