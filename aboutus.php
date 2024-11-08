

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us</title>
  <link rel="stylesheet" href="aboutus.css">
</head>
<body>

<?php include 'navbar.php'; ?>
  <div class="about-container">
    <div class="image-container">
      <img src="assets/aboutus.png" alt="New Item" class="new-image" onload="handleImageLoad(this)">
      <img src="assets/dress1.jpg" alt="Thrift Store" class="cutting-image" onload="handleImageLoad(this)">
    </div>
    <div class="about-content">
      <h2 class="abt">About Us</h2>
      <p id="about-text"></p>
    </div>
  </div>

  <script src="aboutus.js"></script>
</body>
</html>
