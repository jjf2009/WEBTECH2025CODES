<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
include 'db.php';

$result = $mysqli->query("SELECT * FROM students");
?>

<div class="container">
    <h2>Student List</h2>
    <a href="add_student.php" class="button">Add Student</a>
    <a href="logout.php" class="button" style="background:red;">Logout</a>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Actions</th>
        </tr>
        <?php while($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?= $row['id'] ?></td>
            <td><?= $row['name'] ?></td>
            <td><?= $row['email'] ?></td>
            <td><?= $row['phone'] ?></td>
            <td><?= $row['course'] ?></td>
            <td>
                <a href="edit_student.php?id=<?= $row['id'] ?>" class="button">Edit</a>
                <a href="delete_student.php?id=<?= $row['id'] ?>" class="button" style="background:red;"
                   onclick="return confirm('Are you sure?');">Delete</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </table>
</div>
