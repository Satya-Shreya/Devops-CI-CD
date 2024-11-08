<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us</title>
  <link rel="stylesheet" href="ContactUs.css">
</head>
<body>
  <?php include 'navbar.php' ?>
  <div class="contact-us-container">
    <div class="header-image-container">
      <img src="assets/contact-usimg.png" height="1200px" width="700px">
    </div>

    <div class="services-container">
      <div class="service" onclick="showShippingReturns()">
        <i class="fa fa-shipping-fast service-icon"></i>
        <h3>Shipping & Returns</h3>
        <p>Track your shipped items and understand return policies.</p>
      </div>

      <div class="service" onclick="toggleFeedbackModal()">
        <i class="fa fa-comment-dots service-icon"></i>
        <h3>Feedback</h3>
        <p>Read customer feedback and share your own experience.</p>
      </div>

      <div class="service" onclick="toggleMap()">
        <i class="fa fa-store service-icon"></i>
        <h3>Store Pickup</h3>
        <p>Find your nearest store for easy pick-up options.</p>
      </div>

      <div class="service" onclick="window.location.href='LoginPage.php'">
        <i class="fa fa-user-circle service-icon"></i>
        <h3>Account</h3>
        <p>Log in to manage your account settings and preferences.</p>
      </div>

      <div class="service" onclick="toggleSupportPopup()">
        <i class="fa fa-phone service-icon"></i>
        <h3>Contact Support</h3>
        <p>Need help? Call us at 9247503220 for support.</p>
      </div>

      <div class="service">
        <i class="fa fa-envelope service-icon"></i>
        <h3>Email Support</h3>
        <p>For further queries, email us at gbodhinisatyashreya@gmail.com</p>
      </div>
    </div>
  </div>

  <div id="popupContainer"></div>

  <script src="contact.js"></script>
</body>
</html>
