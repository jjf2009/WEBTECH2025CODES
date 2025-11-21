<?php

$mysqli = new mysqli("localhost", "root", "", "test");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}


$name    = $_POST['name'];
$email   = $_POST['email'];
$age     = $_POST['age'];
$phone   = $_POST['phone'];
$year    = $_POST['year'];
$dept    = $_POST['dept'];
$address = $_POST['address'];


if (!ctype_digit($phone) || strlen($phone) != 10) {
    die("Phone number must be 10 digits.");
}

// Prepare statement
$stmt = $mysqli->prepare("
    INSERT INTO users (name, email, age, phone, year, dept, address)
    VALUES (?, ?, ?, ?, ?, ?, ?)
");

$stmt->bind_param(
    "ssissss",
    $name,
    $email,
    $age,
    $phone,
    $year,
    $dept,
    $address
);

if ($stmt->execute()) {
    echo "
        Registration Successful<br><br>
        Name: $name<br>
        Email: $email<br>
        Age: $age<br>
        Phone: $phone<br>
        Year: $year<br>
        Department: $dept<br>
        Address: $address<br>
    ";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$mysqli->close();
?>

