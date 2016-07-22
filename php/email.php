<?php
$to = 'contact@vanguarddesign.io';
$subject = 'Something something darkside';
$message = "Name: " . $_POST['fullName'] . "\r\n" .
        "Phone Number: " . $_POST['phone'] . "\r\n\n" .
        "Budget: " . $_POST['budget'] . "\r\n" .
        "Timeframe: " . $_POST['timeframe'] . "\r\n\n" .  
        $_POST['message'];
$headers = 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'] . "\r\n" . 'X-Mailer: PHP/' . phpversion();


mail($to, $subject, $message, $headers);

header('Location: ../index.html');
?>
