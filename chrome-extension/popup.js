$(document).ready(function() {

	var date = new Date();

	$('#bark').text(chrome.i18n.getMessage("bark"));
	$('#todayDate').text(chrome.i18n.getMessage("todayDate",date.getDate()+". "+(1 + date.getMonth()) + ". " + date.getFullYear()));

	var req = new XMLHttpRequest();
	req.open('GET','http://kle.cz/psi-kalendar/svatek.xml',true);
	req.onload = showEvents;
	req.send(null);

	function showEvents() {
		var psi = req.responseXML.getElementsByTagName('pes');
		for (var i = 0; i < psi.length; ++i) {
			$('#svatky').append('<li>'+psi[i].textContent+'</li>');
		}
	}

});
