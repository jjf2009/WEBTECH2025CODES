<?php
$host = "localhost";
$user = "phpuser";
$pass = "php1234";
$db   = "student_mgmt";

$mysqli = new mysqli($host, $user, $pass, $db);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
?>
