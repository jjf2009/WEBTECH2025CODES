<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}
include 'db.php';

$result = $mysqli->query("SELECT * FROM students");
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Student Management - Dashboard</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="css/style.css"> <!-- Ensure the path is correct -->
</head>
<body>
    <div class="container">
        <h2>Student List</h2>
        <div style="margin-bottom: 15px;">
            <a href="add_student.php" class="button">Add Student</a>
            <a href="logout.php" class="button" style="background:red;">Logout</a>
        </div>

        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Course</th>
                <th>Actions</th>
            </tr>
            <?php while ($row = $result->fetch_assoc()): ?>
                <tr>
                    <td><?= htmlspecialchars($row['id']) ?></td>
                    <td><?= htmlspecialchars($row['name']) ?></td>
                    <td><?= htmlspecialchars($row['email']) ?></td>
                    <td><?= htmlspecialchars($row['age']) ?></td>
                    <td><?= htmlspecialchars($row['course']) ?></td>
                    <td>
                        <a href="edit_student.php?id=<?= $row['id'] ?>" class="button">Edit</a>
                        <a href="delete_student.php?id=<?= $row['id'] ?>" class="button" style="background:red;"
                           onclick="return confirm('Are you sure you want to delete this student?');">Delete</a>
                    </td>
                </tr>
            <?php endwhile; ?>
        </table>
    </div>
</body>
</html>

