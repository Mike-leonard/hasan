<?php
$subject = 'You Got Message'; // Subject of your email
$to = 'mortuza.7@gmail.com';  // Recipient's E-mail

$name = htmlspecialchars($_REQUEST['name']);
$email = htmlspecialchars($_REQUEST['email']);
$msg = htmlspecialchars($_REQUEST['message']);

$email_from = $name . ' <' . $email . '>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: " . $email_from . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

$message = 'Name: ' . $name . "<br>";
$message .= 'Email: ' . $email . "<br>";
$message .= 'Message: ' . $msg;

if (mail($to, $subject, $message, $headers)) {
    // Transfer the value 'sent' to the Ajax function for showing a success message.
    echo 'sent';
} else {
    // Transfer the value 'failed' to the Ajax function for showing an error message.
    echo 'failed';
}
?>
