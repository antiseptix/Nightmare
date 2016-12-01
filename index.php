<?php

session_set_cookie_params(6000, '/', '', false, true);
session_start();

date_default_timezone_set('Europe/Paris');

define('BASEURL', dirname($_SERVER['SCRIPT_NAME']));
//echo json_encode(array("success" => true));

if($_SERVER["REQUEST_METHOD"] == 'GET'){
//	print_r("GET");
	//$doc = new DOMDocument();
//$doc->loadHTMLFile("test.html");
//echo $doc->saveHTML();
if (isset($_GET["load"])) {
	echo '[
{

	"name":"tamere",
	"uuid":"00562659-8d9c-8d9s-9f6s-1s2s6sd6d6q8",
	"fullname":"tamere_00562659-8d9c-8d9s-9f6s-1s2s6sd6d6q8",
	"id":"0"
},
{

	"name":"tre",
	"uuid":"00562659-8d9c-619s-9f6s-1s2s6sd6d6q8",
	"fullname":"tre_00562659-8d9c-619s-9f6s-1s2s6sd6d6q8",
	"id":"1"
}

		]';

}else{ require_once "test.html";
}
}

if($_SERVER["REQUEST_METHOD"] == 'POST'){
	if (isset($_GET["done"])) {
		echo json_encode(array("success" => true, "namefull" => 'blablabla'));

		}
		if (isset($_GET["delete"])) {
			echo json_encode(array("success" => true));

			}
}
