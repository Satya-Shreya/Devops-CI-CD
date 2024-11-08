<?php
session_start();

// Include PHPMailer files
require 'phpmailer_smtp/smtp/class.phpmailer.php';
require 'phpmailer_smtp/smtp/smtp.php';

use PHPMailer\PHPMailer\PHPMailer;
header('Content-Type: application/json'); // Set response header to JSON

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email']);

    // Database connection
    $host = 'localhost';
    $db = 'thrift_store';
    $user = 'root';
    $pass = '';
    $conn = new mysqli($host, $user, $pass, $db);

    if ($conn->connect_error) {
        echo json_encode(['success' => false, 'message' => 'Database connection failed']);
        exit();
    }

    // Check if email exists in the database
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        // Generate a 5-digit random PIN
        $pin = random_int(10000, 99999);
        
        // Store the PIN and email in the session for verification purposes
        $_SESSION['password_reset_pin'] = $pin;
        $_SESSION['reset_email'] = $email;

        // Configure PHPMailer to send the reset PIN email
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com'; // Your SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = 'gbodhinisatyashreya@gmail.com'; // SMTP username
            $mail->Password = 'fyhl mfbf wbtb unzv'; // SMTP password
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            // Set email sender and recipient
            $mail->setFrom('gbodhinisatyashreya@gmail.com', 'Thrift Heaven');
            $mail->addAddress($email);

            $mail->isHTML(true);
            $mail->Subject = 'Password Reset PIN';
            $mail->Body    = "Your password reset PIN is: <strong>$pin</strong>";

            $mail->send();

            echo json_encode(['success' => true, 'message' => 'A reset PIN has been sent to your email.']);
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'message' => 'Error sending email: ' . $mail->ErrorInfo]);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'No user found with this email.']);
    }

    $stmt->close();
    $conn->close();
}
?>
