<?php
// db_connect.php

$host = 'mysql';
$dbname = 'thrift_store'; // replace with your database name
$username = 'Shreya';
$port = 3306; // replace with your database username
$password = 'Shreya'; // replace with your database password

$conn = new mysqli($host, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
