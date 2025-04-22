<?php
$host = 'localhost';
$db = 'thrift_store';
$user = 'sreeraj';
$pass = 'Sreeraj@2004';
$port = 3307;

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Database connection failed: " . $e->getMessage();
    exit;
}
?>
