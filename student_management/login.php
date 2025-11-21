<?php
session_start();
include 'db.php'; // expects $mysqli connection from db.php

// If already logged in, go to index
if (isset($_SESSION['username'])) {
    header("Location: index.php");
    exit();
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Simple query (not for production use)
    $result = $mysqli->query("SELECT * FROM users WHERE username='$username' AND password='$password'");

    if ($result && $result->num_rows === 1) {
        $_SESSION['username'] = $username;
        header("Location: index.php");
        exit();
    } else {
        $error = "Invalid username or password.";
    }
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Login - Student Management</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="login-container">
    <form method="post" class="login-card">
        <h2 class="title">Login</h2>

        <?php if (!empty($error)): ?>
            <p class="error"><?= $error ?></p>
        <?php endif; ?>

        <label class="field">
            <span>Username:</span>
            <input type="text" name="username" required>
        </label>

        <label class="field">
            <span>Password:</span>
            <input type="text" id="password" name="password" required>
        </label>

        <input type="submit" name="login" value="Login" class="btn">
    </form>
</div>
</body>
</html>

