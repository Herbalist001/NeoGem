<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


$to = 'info@neogemadvisory.com'; 
$subject = 'Message from Chatbox';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $userSubject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email format!';
        exit;
    }

    
    if (empty($message) || empty($userSubject)) {
        echo 'Subject and message cannot be empty!';
        exit;
    }

    
    $body = "Email: " . $email . "\n\nSubject: " . $userSubject . "\n\nMessage:\n" . $message;

    $headers = 'From: noreply@yourwebsite.com' . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'Content-Type: text/plain; charset=UTF-8';


    if (mail($to, $subject, $body, $headers)) {
        echo 'Email sent successfully!';
    } else {
        echo 'Error sending email!';
    }
} else {
    echo 'Invalid request method!';
}
?>
