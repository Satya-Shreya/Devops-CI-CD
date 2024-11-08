
<?php
function addToCart($userId, $productId, $quantity) {
    global $conn;

    // Check if the item is already in the cart
    $stmt = $conn->prepare("SELECT quantity FROM cart WHERE user_id = ? AND product_id = ?");
    $stmt->bind_param("ii", $userId, $productId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        // If item already exists in cart, update quantity
        $stmt = $conn->prepare("UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?");
        $stmt->bind_param("iii", $quantity, $userId, $productId);
    } else {
        // If item is new to the cart, insert it
        $stmt = $conn->prepare("INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)");
        $stmt->bind_param("iii", $userId, $productId, $quantity);
    }

    return $stmt->execute();
}

function getCartItems($userId) {
    global $conn;
    
    // Retrieve cart items for the user
    $stmt = $conn->prepare("SELECT cart.product_id, cart.quantity, products.name, products.price, products.image 
                            FROM cart 
                            JOIN products ON cart.product_id = products.id 
                            WHERE cart.user_id = ?");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    $cartItems = [];
    while ($row = $result->fetch_assoc()) {
        $cartItems[] = $row;
    }
    return $cartItems;
}
?>
