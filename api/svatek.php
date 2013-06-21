<?php
date_default_timezone_set('Europe/Prague');
header('Content-type: application/xml');
print "<?xml version=\"1.0\"?>\n<svatek>\n";
$soubor='svatky/'.date('m/d',time()).'.txt';
if(is_readable($soubor)){
	$jmena=file($soubor);
	foreach($jmena as $jmeno){

		print '<pes>'.trim($jmeno)."</pes>\n";
	}
}else{
	print "<pes>Jejda, psí jména nejsou k nalezení.</pes>\n";
}
print '</svatek>';
