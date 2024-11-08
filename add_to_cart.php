<?php
session_start();
include 'db_connect.php';
include 'cart_functions.php';

// Check if the request is POST and the user is logged in
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SESSION['user_id'])) {
    $userId = $_SESSION['user_id'];
    $productId = $_POST['product_id'];
    $quantity = $_POST['quantity'];

    // Attempt to add the item to the cart
    if (addToCart($userId, $productId, $quantity)) {
        // Item added successfully
        header("Location: products.php?message=Item added to cart");
        exit();
    } else {
        // Failed to add item
        header("Location: products.php?error=Failed to add item to cart");
        exit();
    }
} else {
    // Not a POST request or user not logged in
    header("Location: products.php?error=You need to log in to add items to your cart.");
    exit();
}
?>
