<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

echo "hello";

include 'db.php';

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $course = $_POST['course'];

    $mysqli->query("INSERT INTO students (name, email, age, course) VALUES ('$name', '$email', '$age', '$course')");
    header("Location: index.php");
    exit();
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Add Student - Student Management</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h2>Add Student</h2>
        <form method="post">
    <div class="field">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" value="<?= $student['name'] ?>" required>
    </div>

    <div class="field">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" value="<?= $student['email'] ?>" required>
    </div>

    <div class="field">
        <label for="age">Age</label>
        <input type="text" id="age" name="age" value="<?= $student['age'] ?>" required>
    </div>

    <div class="field">
        <label for="course">Course</label>
        <input type="text" id="course" name="course" value="<?= $student['course'] ?>" required>
    </div>

    <input type="submit" name="submit" value="Update Student" class="button">
    <a href="index.php" class="button" style="background:red;">Cancel</a>
</form>
    </div>
</body>
</html>
