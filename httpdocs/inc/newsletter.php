<?php
date_default_timezone_set('Europe/London');
require('mailchimp/MailChimp.php');

if ( isset($_POST['submitted']) ) {

	// Array to handle error messages.
	$errors = array();
	// Array to handle user input.
	$input = array();
	// Fields to be exluded from the email.
	$exclude = array('submit', 'submitted', 'X', 'Y', 'x', 'y', 'blank_input');

	// Fields required by the user & URL redirect.
	$required_fields = array('email');

	foreach($_POST as $k => $v)	{
		$input[$k] = trim($v);
	}

	foreach($required_fields as $f) {
		if(empty($input[$f])) {
			$lbl = str_replace('contact_', '', $f);
			$errors[] = 'Please enter your ' . $lbl . '.';
		}
	}

	if (empty($errors)) {

		foreach($input as $k => $v)	{

			if(!in_array($k, $exclude)) {
				$k = ucwords(strtolower(str_replace('contact_','',$k)));
				$submittedEmail = $v;
			}

		}
		header('Content-type: application/json');
		$MailChimp = new Drewm\MailChimp('946785f0e2946ad2bae19f2dfd181ed5-us3');

		$result = $MailChimp->call('lists/subscribe', array(
			'id'                => '42ad5889a6',
			'email'             => array('email'=>$submittedEmail),
		    'double_optin'      => false,
		    'update_existing'   => true,
		    'replace_interests' => false,
		    'send_welcome'      => true
		));
		echo json_encode('{"result":"success","error":false}');
		exit;

	} // End IF empty($errors).

		$_SESSION['errors'] = $errors;

		echo json_encode('{"result":"error","error":' . print_r($errors) . '}');

	$_SESSION['errors'] = $errors;

} // End IF main submit conditional.
?>