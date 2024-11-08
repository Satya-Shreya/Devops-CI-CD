<?php
// db_connect.php

$host = 'localhost';
$dbname = 'thrift_store'; // replace with your database name
$username = 'root'; // replace with your database username
$password = ''; // replace with your database password

$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
