<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'coulibalyoumartc@gmail.com';
    $email_subject = "Nouveau job";
    $email_body= "username : $name.\n". 
                "User Email: $visitor_email.\n". 
                "User Message: $message.\n";

    $to = "oumarweb01@gmail.com";
    $headers = "from: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email";

    mail($to,$email_subject,$email_body, $headers);
    header("location : index.html");
?>