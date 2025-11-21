!DOCTYPE html>
<html>
<body>
<h2>Validated Registration Form</h2>
<form method="POST" action="">
Name: <input type="text" name="name"><br><br>
Email: <input type="email" name="email"><br><br>
Password: <input type="password" name="password"><br><br>
<button type="submit" name="submit">Register</button>
</form>
<?php
if (isset($_POST['submit'])) {
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$password = trim($_POST['password']);
if ($name == "" || $email == "" || $password == "") {
echo "<p>All fields are mandatory.</p>";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
echo "<p>Invalid email format.</p>";
} elseif (strlen($password) < 6) {
echo "<p>Password must be at least 6 characters.</p>";
} else {
echo "<p>Registration successful.</p>"; }}?></body></html>