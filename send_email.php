<?php
session_start();
include 'db_connect.php';
require 'phpmailer_smtp\smtp\PHPMailerAutoload.php'; // Ensure the path to PHPMailer is correct

$data = json_decode(file_get_contents("php://input"), true);
$address = $data['address'] ?? '';
$email = $data['email'] ?? '';

if (empty($address) || empty($email)) {
    echo json_encode(['success' => false, 'message' => 'Address or email missing']);
    exit();
}

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com'; 
$mail->SMTPAuth = true;
$mail->Username = 'gbodhinisatyashreya@gmail.com'; 
$mail->Password = 'pnxu bcir rsxn ocgk';           
$mail->SMTPSecure = 'tls';                  
$mail->Port = 587;                          


// Email content
$mail->setFrom('gbodhinisatyashreya@gmail.com', 'Thrift store'); // Replace with your email and name
$mail->addAddress($email); // Recipient's email
$mail->addReplyTo('gbodhinisatyashreya@gmail.com', 'Shreya'); // Replace with your email

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
