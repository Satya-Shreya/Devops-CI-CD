<?php
// Database connection
$host = 'localhost';
$db = 'thrift_store';
$user = 'root';
$pass = ''; // Empty password for root

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Initialize variables to store error messages and form data
$errors = [];
$formData = [
    'name' => '',
    'phone' => '',
    'email' => '',
    'password' => '',
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize form inputs
    $formData['name'] = trim($_POST['name']);
    $formData['phone'] = trim($_POST['phone']);
    $formData['email'] = trim($_POST['email']);
    $formData['password'] = trim($_POST['password']);
    
    // Validate inputs
    if (empty($formData['name'])) {
        $errors[] = "Name is required.";
    }

    if (empty($formData['phone'])) {
        $errors[] = "Phone number is required.";
    } elseif (!preg_match('/^\d{10}$/', $formData['phone'])) {
        $errors[] = "Phone number must be 10 digits.";
    }

    if (empty($formData['email'])) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($formData['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    if (empty($formData['password'])) {
        $errors[] = "Password is required.";
    } elseif (!preg_match('/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/', $formData['password'])) {
        $errors[] = "Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and one special character.";
    }

    // Check if there are no errors before inserting into the database
    if (empty($errors)) {
        // Prepare an SQL statement to prevent SQL injection
        $stmt = $conn->prepare("INSERT INTO users (name, phone, email, password) VALUES (?, ?, ?, ?)");
        $hashedPassword = password_hash($formData['password'], PASSWORD_BCRYPT); // Hash the password
        $stmt->bind_param("ssss", $formData['name'], $formData['phone'], $formData['email'], $hashedPassword);

        if ($stmt->execute()) {
            echo "<script>alert('Signup successful!');</script>";
            // Redirect or clear form after successful signup
            // header("Location: success.php"); // Uncomment to redirect
        } else {
            echo "<script>alert('Error: " . $stmt->error . "');</script>";
        }

        $stmt->close();
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="signup.css">
</head>
<body>
<?php session_start(); include 'navbar.php'; ?>
<div class="signup-container">
    <h2>Sign Up</h2>
    <form id="signup-form" method="POST"> <!-- Form now has method POST -->
        <input type="text" name="name" placeholder="Full Name" class="input" required value="<?php echo htmlspecialchars($formData['name']); ?>">
        <input type="text" name="phone" placeholder="Phone Number" class="input" required value="<?php echo htmlspecialchars($formData['phone']); ?>">
        <input type="email" name="email" placeholder="Email" class="input" required value="<?php echo htmlspecialchars($formData['email']); ?>">
        <input type="password" name="password" placeholder="Password" class="input" required autocomplete="new-password">
        <input type="password" name="confirmPassword" placeholder="Confirm Password" class="input" required autocomplete="new-password">
        <button type="submit" id="submitButton">Submit</button>
    </form>

    <!-- Display errors if there are any -->
    <?php if (!empty($errors)): ?>
        <div class="error-messages">
            <?php foreach ($errors as $error): ?>
                <p><?php echo htmlspecialchars($error); ?></p>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</div>

<script src="signup.js"></script>
</body>
</html>
