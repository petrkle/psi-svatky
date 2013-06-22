$(document).ready(function() {

	var d = new Date();

	$('#bark').text(chrome.i18n.getMessage("bark"));
	$('#todayDate').text(chrome.i18n.getMessage("todayDate",d.getDate()+". "+(1 + d.getMonth()) + ". " + d.getFullYear()));

	var req = new XMLHttpRequest();
	req.open('GET','http://petr.kle.cz/psi-svatky/'+("0" + (d.getMonth() + 1)).slice(-2)+'/'+("0" + d.getDate()).slice(-2)+'.xml',true);
	req.onload = showEvents;
	req.send(null);

	function showEvents() {
		var psi = req.responseXML.getElementsByTagName('pes');
		for (var i = 0; i < psi.length; ++i) {
			$('#svatky').append('<li>'+psi[i].textContent+'</li>');
		}
	}

});
