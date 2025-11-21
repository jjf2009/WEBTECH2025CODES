<?php
session_start();
if (!isset($_SESSION['username'])) { header("Location: login.php"); exit(); }
include 'db.php';

$id = $_GET['id'];
$result = $mysqli->query("SELECT * FROM students WHERE id=$id");
$student = $result->fetch_assoc();

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $course = $_POST['course'];

    $mysqli->query("UPDATE students SET name='$name', email='$email', phone='$phone', course='$course' WHERE id=$id");
    header("Location: index.php");
    exit();
}
?>

<div class="container">
    <h2>Edit Student</h2>
    <form method="post">
        <input type="text" name="name" value="<?= $student['name'] ?>" required>
        <input type="email" name="email" value="<?= $student['email'] ?>" required>
        <input type="text" name="phone" value="<?= $student['phone'] ?>" required>
        <input type="text" name="course" value="<?= $student['course'] ?>" required>
        <input type="submit" name="submit" value="Update Student">
    </form>
</div>
