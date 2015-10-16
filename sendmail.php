<?php

//Wait a couple seconds so the modal on the front end has at least of few seconds of fame
sleep(2);

// Show all information, defaults to INFO_ALL
//phpinfo();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postdata = file_get_contents("php://input");
     $request = json_decode($postdata);
//     $name = $request->name;
//     $email = $request->email;
//     $message = $request->message;
}


/////////////////////////////////////////////////////////


// message
$message = '
<html>
<head>
  <title>Tech Me Holmes Contact Message</title>
</head>
<body>
<p>Hi ' . $request->first . ',</p>
<p>Thanks for submitting your comment on TechMeHolmes.com.  The following message was sent to Kevin at TechMeHolmes.com and if you provided your contact information, he\'ll be in touch shortly.  Thanks!</p>
<p>' . $request->message . '</p>
<p>Thanks again!</p>
<p>Kevin Holmes</p>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'To: Kevin <kevin@techmeholmes.com>' . "\r\n";
$headers .= 'From: Kevin <kevin@techmeholmes.com>' . "\r\n";
$headers .= 'Cc: ' . $request->first . ' ' . $request->last . ' <' . $email . '>' . "\r\n";
$headers .= 'Bcc: no-reply@techmeholmes.com' . "\r\n";

$to = $email = $request->email;
$subject = 'TechMeHolmes Contact Message';
//$message = 'Hi ' . $request->name . ',\n\nThanks for submitting your comment on TechMeHolmes.com.  The following message was sent to Kevin at TechMeHolmes.com and if you provided your contact information, he\'ll be in touch shortly.  Thanks!\n\n' . $request->message;

// Mail it
mail($to, $subject, $message, $headers);

////////////////////////////////////////////////////////////

define("SPAM_CONTROL_FILE", "spam_control.log");
define("EMAIL_LOG", "email_log.log");

$date=getdate();

$email_record = array();
$email_record[$email] = $date[0];

//foreach($email_record as $email_address => $epoch_seconds) {
//    echo "Key=" . $email_address . ", Value=" . $epoch_seconds;
//    echo "<br>";
//}
//echo '<br>';
//echo $jsonObject = json_encode($email_record);
//
//
//$myfile = fopen(SPAM_CONTROL_FILE, "w") or die("Unable to open file!");
//fwrite($myfile, "RAW POST DATA: " . $postdata . "\n");
//fwrite($myfile, "EMAIL: " . $email_record . "\n");
//fclose($myfile);
?>