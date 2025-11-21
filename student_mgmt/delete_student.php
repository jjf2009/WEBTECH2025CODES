<?php
session_start();
if (!isset($_SESSION['username'])) { header("Location: login.php"); exit(); }
include 'db.php';

$id = $_GET['id'];
$mysqli->query("DELETE FROM students WHERE id=$id");

header("Location: index.php");
exit();
?>