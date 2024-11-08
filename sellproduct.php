<!-- <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sell Product</title>
  <link rel="stylesheet" href="sellproduct.css">
</head>
<body>

<div class="sell-product-container">
  <h2 class="sellpro">Sell Your Product</h2>
  <form id="sell-product-form" class="sell-product-form" onsubmit="handleSubmit(event)">
    <input type="text" placeholder="Product Name" id="productName" required>
    <textarea placeholder="Product Description" id="description" required></textarea>
    <input type="number" placeholder="Product Price" id="price" required>
    <input type="file" accept="image/*" id="image" required>
    <button type="submit" class="btn-submit">Submit</button>
  </form>


  <div id="address-popup" class="popup-overlay" style="display: none;">
    <div class="popup-content">
      <h3>Enter Pickup Address</h3>
      <form id="address-form" onsubmit="handleAddressSubmit(event)">
        <textarea placeholder="Enter your address for pickup" id="address" required></textarea>
        <button type="submit" class="btn-submit">Submit Address</button>
      </form>
    </div>
  </div>

 
  <div id="confirmation-popup" class="popup-overlay" style="display: none;">
    <div class="popup-content">
      <h3>Thank you!</h3>
      <p>Our pickup agent will arrive to pick up your product.</p>
      <button onclick="closeConfirmationPopup()" class="btn-submit">Close</button>
    </div>
  </div>
</div>

<script src="sellproduct.js"></script>
</body>
</html> -->




<!-- 


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sell Product</title>
  <link rel="stylesheet" href="sellproduct.css">
</head>
<body>

<div class="sell-product-container">
  <h2 class="sellpro">Sell Your Product</h2>
  <form id="sell-product-form" class="sell-product-form" action="store_product.php" method="POST" enctype="multipart/form-data">
    <input type="text" name="productName" placeholder="Product Name" id="productName" required>
    <textarea name="description" placeholder="Product Description" id="description" required></textarea>
    <input type="number" name="price" placeholder="Product Price" id="price" required>
    <input type="file" name="image" accept="image/*" id="image" required>
    <button type="submit" class="btn-submit">Submit</button>
  </form>

  <div id="address-popup" class="popup-overlay" style="display: none;">
    <div class="popup-content">
      <h3>Enter Pickup Address</h3>
      <form id="address-form" onsubmit="handleAddressSubmit(event)">
        <textarea placeholder="Enter your address for pickup" id="address" required></textarea>
        <button type="submit" class="btn-submit">Submit Address</button>
      </form>
    </div>
  </div>

  <div id="confirmation-popup" class="popup-overlay" style="display: none;">
    <div class="popup-content">
      <h3>Thank you!</h3>
      <p>Our pickup agent will arrive to pick up your product.</p>
      <button onclick="closeConfirmationPopup()" class="btn-submit">Close</button>
    </div>
  </div>
</div>

<script src="sellproduct.js"></script>
</body>
</html> -->





<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sell Product</title>
  <link rel="stylesheet" href="sellproduct.css">
</head>
<body>
<?php include 'navbar.php'; ?>

<div class="sell-product-container">
  <h2 class="sellpro">Sell Your Product</h2>
  
  <!-- Main Product Form -->
  <form id="sell-product-form" class="sell-product-form" action="store_product.php" method="POST" enctype="multipart/form-data" onsubmit="showAddressPopup(event)">
    <input type="text" name="productName" placeholder="Product Name" id="productName" required>
    <textarea name="description" placeholder="Product Description" id="description" required></textarea>
    <input type="number" name="price" placeholder="Product Price" id="price" required>
    <input type="file" name="image" accept="image/*" id="image" required>
    <button type="submit" class="btn-submit">Submit</button>
  </form>

  <!-- Address Popup -->
  <div id="address-popup" class="popup-overlay" style="display: none;">
    <div class="popup-content">
      <h3>Enter Pickup Address</h3>
      <form id="address-form" onsubmit="submitAddress(event)">
        <textarea name="address" placeholder="Enter your address for pickup" id="address" required></textarea>
        <button type="submit" class="btn-submit">Submit Address</button>
      </form>
    </div>
  </div>

  <!-- Confirmation Popup -->
  <div id="confirmation-popup" class="popup-overlay" style="display: none;">
    <div class="popup-content">
      <h3>Thank you!</h3>
      <p>Our pickup agent will arrive to pick up your product.</p>
      <button onclick="closeConfirmationPopup()" class="btn-submit">Close</button>
    </div>
  </div>
</div>



<script src="sellproduct.js"></script>
</body>
</html>
