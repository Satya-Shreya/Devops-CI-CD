<?php
session_start();
include 'db_connect.php'; // Ensure this file contains the database connection code

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['productName'], $_POST['description'], $_POST['price'], $_FILES['image'])) {
        $productName = $_POST['productName'];
        $description = $_POST['description'];
        $price = $_POST['price'];
        $image = $_FILES['image'];

        // Validate inputs
        if (empty($productName) || empty($description) || empty($price) || $image['error'] !== UPLOAD_ERR_OK) {
            echo "Please fill in all fields and upload a valid image.";
            exit;
        }

        // Handle image upload
        $targetDir = "uploads/";
        if (!file_exists($targetDir)) {
            mkdir($targetDir, 0777, true); // Create directory if it doesn't exist
        }
        $targetFile = $targetDir . basename($image["name"]);
        $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
        
        // Check if file is an actual image
        $check = getimagesize($image["tmp_name"]);
        if ($check === false) {
            echo "File is not an image.";
            exit;
        }

        // Move uploaded file to target directory
        if (!move_uploaded_file($image["tmp_name"], $targetFile)) {
            echo "Sorry, there was an error uploading your file.";
            exit;
        }

        // Insert product into database
        $stmt = $conn->prepare("INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssds", $productName, $description, $price, $image["name"]);

        if ($stmt->execute()) {
            // Redirect to products.php after successful insertion
            header("Location: products.php");
            exit;
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Invalid input.";
    }
}

$conn->close();
?>
