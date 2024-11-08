<?php
session_start();
include 'cart_functions.php';

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$item_id = $data['itemId'];
$user_id = $_SESSION['user_id'];

if (deleteCartItem($item_id, $user_id)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>
