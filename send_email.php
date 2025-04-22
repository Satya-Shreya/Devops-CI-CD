<?php
session_start();
require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$data = json_decode(file_get_contents("php://input"), true);
$address = $data['address'] ?? '';
$email = $data['email'] ?? '';

if (empty($address) || empty($email)) {
    echo json_encode(['success' => false, 'message' => 'Address or email missing']);
    exit();
}

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = 2; // Debug output
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'gbodhinisatyashreya@gmail.com';
    $mail->Password = 'abcdef'; // App password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('gbodhinisatyashreya@gmail.com', 'Thrift store');
    $mail->addAddress($email);
    $mail->addReplyTo('gbodhinisatyashreya@gmail.com', 'Shreya');

    $mail->isHTML(false);
    $mail->Subject = "Order Confirmation - Your Order Has Been Shipped";
    $mail->Body = "Thank you for your order! Your items have been shipped to:\n\n$address";

    $mail->send();
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    error_log('Mailer Error: ' . $mail->ErrorInfo); // Log to Apache error log
    echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
}



function clearCartItems($userId) {
    global $conn; // Assuming $conn is your database connection

    $stmt = $conn->prepare("DELETE FROM cart WHERE user_id = ?");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $stmt->close();
}
?>
