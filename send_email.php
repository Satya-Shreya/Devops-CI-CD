<?php
session_start();
include 'db_connect.php';
require 'phpmailer_smtp/smtp/PHPMailerAutoload.php'; // Ensure the path to PHPMailer is correct

$data = json_decode(file_get_contents("php://input"), true);
$address = $data['address'] ?? '';
$email = $data['email'] ?? '';

if (empty($address) || empty($email)) {
    echo json_encode(['success' => false, 'message' => 'Address or email missing']);
    exit();
}

// SMTP configuration for PHPMailer
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
$mail->SMTPAuth = true;
$mail->Username = 'mail'; // Replace with your email
$mail->Password = 'password';           // Replace with your email password or app-specific password
$mail->SMTPSecure = 'tls';                   // Use 'tls' or 'ssl' based on your SMTP provider
$mail->Port = 587;                           // Common port for 'tls' is 587, for 'ssl' is 465

// Email content
$mail->setFrom('mail', 'Thrift store'); // Replace with your email and name
$mail->addAddress($email); // Recipient's email
$mail->addReplyTo('mail', 'name'); // Replace with your email

$mail->Subject = "Order Confirmation - Your Order Has Been Shipped";
$mail->Body = "Thank you for your order! Your items have been shipped to:\n\n$address";
$mail->isHTML(false); // Set to true if using HTML in email body

// Attempt to send the email
if ($mail->send()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email: ' . $mail->ErrorInfo]);
}










function clearCartItems($userId) {
    global $conn; // Assuming $conn is your database connection

    $stmt = $conn->prepare("DELETE FROM cart WHERE user_id = ?");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $stmt->close();
}
?>
