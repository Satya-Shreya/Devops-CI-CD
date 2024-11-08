<!-- <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Page</title>
  <link rel="stylesheet" href="Product.css">
</head>
<body>

<div class="product-page">
  <div class="search-container">
    <input
      type="text"
      class="search-input"
      placeholder="Search products..."
      id="search-input"
      oninput="handleSearchChange()"
    />
  </div>

  <div class="grid-container" id="product-grid">
    
  </div>

  <div id="image-popup" class="image-popup-overlay" style="display: none;" onclick="closePopup()">
    <div class="image-popup-content" onclick="event.stopPropagation()">
      <button class="close-button" onclick="closePopup()">&times;</button>
      <img id="popup-image" src="" alt="Popup" class="popup-image" />
    </div>
  </div>
</div>

<script src="script.js"></script>
</body>
</html> -->


<!-- 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Page</title>
  <link rel="stylesheet" href="Product.css">
</head>
<body>

<div class="product-page">
 
  <div class="search-container">
    <input
      type="text"
      class="search-input"
      placeholder="Search products..."
      id="search-input"
      oninput="handleSearchChange()"
    />
  </div>

 
  <div class="product-form">
    <h2>Add a New Product</h2>
    <form action="store_product.php" method="POST" enctype="multipart/form-data">
      <label for="name">Product Name:</label>
      <input type="text" name="name" id="name" required>

      <label for="description">Description:</label>
      <textarea name="description" id="description" required></textarea>

      <label for="price">Price:</label>
      <input type="number" name="price" id="price" step="0.01" required>

      <label for="image">Image:</label>
      <input type="file" name="image" id="image" required>

      <button type="submit">Add Product</button>
    </form>
  </div>

 
  <div class="grid-container" id="product-grid">
   
  </div>

 
  <div id="image-popup" class="image-popup-overlay" style="display: none;" onclick="closePopup()">
    <div class="image-popup-content" onclick="event.stopPropagation()">
      <button class="close-button" onclick="closePopup()">&times;</button>
      <img id="popup-image" src="" alt="Popup" class="popup-image" />
    </div>
  </div>
</div>

<script src="products.js"></script>
</body>
</html> -->




<?php
session_start();
include 'db_connect.php';
include 'cart_functions.php';

$userId = $_SESSION['user_id'] ?? null; 

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_to_cart'])) {
    if ($userId === null) {
        echo "<script>alert('You need to log in to add items to your cart.');</script>";
    } else {
        $productId = $_POST['product_id'];
        $quantity = $_POST['quantity'];

        if (addToCart($userId, $productId, $quantity)) {
            echo "<script>alert('Item added to cart!');</script>";
        } else {
            echo "<script>alert('Failed to add item to cart.');</script>";
        }
    }
}

$query = "SELECT * FROM products";
$result = $conn->query($query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Page</title>
    <link rel="stylesheet" href="Product.css">
</head>
<body>

<?php include 'navbar.php'?>

<div class="product-page">
    <div class="grid-container" id="product-grid">
        <?php while ($product = $result->fetch_assoc()): ?>
            <div class="product-card">
                <img class="product-image" src="uploads/<?php echo htmlspecialchars($product['image']); ?>" alt="<?php echo htmlspecialchars($product['name']); ?>">
                <h3 class="itmname"><?php echo htmlspecialchars($product['name']); ?></h3>
                <p class="info"><?php echo htmlspecialchars($product['description']); ?></p>
                <p class="info">Price: $<?php echo htmlspecialchars($product['price']); ?></p>
                
                <!-- Add to Cart Form -->
                <form action="products.php" method="POST">
                    <input class="info" type="hidden" name="product_id" value="<?php echo $product['id']; ?>">
                    <label for="quantity" class="info">Quantity:</label>
                    <input type="number" name="quantity" value="1" min="1" required class="info">
                    <button type="submit" name="add_to_cart">Add to Cart</button>
                </form>
            </div>
        <?php endwhile; ?>
    </div>
</div>

</body>
</html>

<?php $conn->close(); ?>
