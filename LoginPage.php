
<?php
session_start(); // Start the session at the top of the file

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Database connection settings
    $host = 'localhost';
    $db = 'thrift_store';
    $user = 'root';
    $pass = ''; // Empty password for root

    $conn = new mysqli($host, $user, $pass, $db);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get the submitted email and password
    $email = trim($_POST['email']); // Change to 'email' for clarity
    $password = trim($_POST['password']);

    // Check for empty fields
    if (empty($email) || empty($password)) {
        $error = "Please enter both email and password.";
    } else {
        // Query to check if the user exists
        $stmt = $conn->prepare("SELECT id, name, password FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();
            
            // Verify the password
            if (password_verify($password, $user['password'])) {
                // Successful login
                $_SESSION['logged_in'] = true;
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['name'];

                header("Location: home.php"); // Redirect to the homepage after login
                exit;
            } else {
                $error = "Incorrect email or password.";
            }
        } else {
            $error = "User not found.";
        }

        $stmt->close();
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
  <link rel="stylesheet" href="LoginPage.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>

<?php include 'navbar.php'; ?>
<img class="wave" src="assets/wave.png" alt="Wave Background" />
<div class="container">
  <div class="img">
    <img src="assets/bg.svg" alt="Background">
  </div>
  <div class="login-content">
    <form method="POST" action="">
      <img src="assets/avatar.svg" alt="Avatar">
      <h2 class="title">Welcome</h2>

      <?php if (isset($error)) : ?>
        <p style="color: red;"><?= htmlspecialchars($error) ?></p>
      <?php endif; ?>

      <div class="input-div one" id="username-div">
        <div class="i">
          <i class="fas fa-user"></i>
        </div>
        <div class="div">
          <h5>Email</h5>
          <input type="text" name="email" id="username" class="input" required onfocus="handleFocus('username')" onblur="handleBlur('username')"> <!-- Change name to 'email' -->
        </div>
      </div>

      <div class="input-div pass" id="password-div">
        <div class="i">
          <i class="fas fa-lock"></i>
        </div>
        <div class="div">
          <h5>Password</h5>
          <input type="password" name="password" id="password" class="input" required onfocus="handleFocus('password')" onblur="handleBlur('password')">
        </div>
      </div>

      <a href="#" onclick="handleForgotPassword(event)">Forgot Password?</a>
      <input type="submit" class="btn" value="Login">
    </form>
  </div>
</div>



<div id="forgot-password-modal" style="display: none;">
    <div class="modal-content">
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <h2>Forgot Password</h2>
        <p>Please enter your email address to receive a reset PIN.</p>
        <form method="POST" action="">
            <input type="email" name="forgot_email" id="forgot-email" placeholder="Enter your email" required>
            <button type="submit" name="forgot_password">Send PIN</button>
        </form>
        <?php if (isset($message)) : ?>
            <p id="response-message" style="color: red;"><?= htmlspecialchars($message) ?></p>
        <?php endif; ?>
    </div>
</div>

<script src="login.js"></script>
</body>
</html>