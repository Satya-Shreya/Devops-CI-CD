<!-- cart.php -->
<?php
session_start();
include 'db_connect.php';
include 'cart_functions.php';

$userId = $_SESSION['user_id'] ?? null;

if ($userId === null) {
    echo "You need to log in to view your cart.";
    exit();
}

$cartItems = getCartItems($userId);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Cart</title>
    <link rel="stylesheet" href="cart.css">
</head>
<body>
    <?php include 'navbar.php'?>
    <h1 class="head">Your Cart</h1>
    <?php if (empty($cartItems)): ?>
        <p class="head">Your cart is empty.</p>
    <?php else: ?>
        <div class="grid-container">
            <?php foreach ($cartItems as $item): ?>
                <div class="cart-item" data-price="<?php echo htmlspecialchars($item['price']); ?>" data-quantity="<?php echo htmlspecialchars($item['quantity']); ?>">
                    <img src="uploads/<?php echo htmlspecialchars($item['image']); ?>" alt="<?php echo htmlspecialchars($item['name']); ?>" width="100" height="200px"><br>
              <div class="itm-name">      <strong><?php echo htmlspecialchars($item['name']); ?></strong><br></div>
               <div class="text">  Price: $<?php echo htmlspecialchars($item['price']); ?><br>
                    Quantity: <?php echo htmlspecialchars($item['quantity']); ?><br>
                    Total: $<?php echo htmlspecialchars($item['price'] * $item['quantity']); ?> </div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Checkout Button in cart.php -->
        <button onclick="showCheckoutPopup()" class="chbtn">Checkout</button><br><br>

        <!-- Checkout Popup with Address and Email -->
        <div id="checkoutPopup" class="popup-overlay" style="display: none;">
            <div class="popup-content">
                <h2>Checkout</h2>
                <p>Total Amount: $<span id="totalAmount"></span></p>
                
                <!-- Address Input -->
                <label for="address">Enter your address:</label>
                <textarea id="address" rows="3" placeholder="Enter your address here"></textarea>
                
                <!-- Email Input -->
                <label for="email">Enter your email:</label>
                <input type="email" id="email" placeholder="Enter your email here" required>
                
                <button onclick="proceedToShipping()">Continue</button>
                <button onclick="closeCheckoutPopup()">Cancel</button>
            </div>
        </div>
    <?php endif; ?>
    <a class="linkn" href="products.php" >Continue Shopping</a>

    <script src="cart.js"></script>
</body>
</html>
