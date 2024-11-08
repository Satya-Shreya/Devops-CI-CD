<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Handle user signup or login here
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Here you would typically add code to save the user in a database
    // For demonstration, let's assume a successful signup
    echo json_encode(['status' => 'success', 'message' => 'User registered successfully!']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>
