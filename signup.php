<?php session_start(); include 'navbar.php'; ?>
<?php

$host = 'mysql';
$db = 'thrift_store';
$port = 3306;
$user = 'Shreya';
$pass = 'Shreya'; 

$conn = new mysqli($host, $user, $pass, $db, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$errors = [];
$formData = [
    'name' => '',
    'phone' => '',
    'email' => '',
    'password' => '',
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $formData['name'] = trim($_POST['name']);
    $formData['phone'] = trim($_POST['phone']);
    $formData['email'] = trim($_POST['email']);
    $formData['password'] = trim($_POST['password']);
    
   
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

    if (empty($errors)) {
       
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
<div class="signup-container">
    <h2>Sign Up</h2>
    <form id="signup-form" method="POST"> 
        <input type="text" name="name" placeholder="Full Name" class="input" required value="<?php echo htmlspecialchars($formData['name']); ?>"> <br><br>
        <input type="text" name="phone" placeholder="Phone Number" class="input" required value="<?php echo htmlspecialchars($formData['phone']); ?>"><br><br>
        <input type="email" name="email" placeholder="Email" class="input" required value="<?php echo htmlspecialchars($formData['email']); ?>"><br><br>
        <input type="password" name="password" placeholder="Password" class="input" required autocomplete="new-password"><br><br>
        <input type="password" name="confirmPassword" placeholder="Confirm Password" class="input" required autocomplete="new-password"><br><br>
        <button type="submit" id="submitButton" class="btnsub" style="color: 'black'">Submit</button>
    </form>

 
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
