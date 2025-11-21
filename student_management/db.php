<?php
// Configuration for the database connection (Using XAMPP default root/no password)
$host = "localhost";
$user = "root";     // XAMPP default user
$pass = "";         // XAMPP default password
$db   = "student_db"; // Database name we created

$mysqli = new mysqli($host, $user, $pass, $db);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Start the session (required for login state)
session_start();
?>

