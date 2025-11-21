<?php
$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];
$year = $_POST['year'];
$dept = $_POST['dept'];
?>
<!DOCTYPE html>
<html>
<body>
<h2>Student Registration Details</h2>
<hr>
<p><strong>Full Name:</strong> <?php echo $name; ?></p>
<p><strong>Email Address:</strong> <?php echo $email; ?></p>
<p><strong>Age:</strong> <?php echo $age; ?></p>
<p><strong>Year of Study:</strong> <?php echo $year; ?></p>
<p><strong>Department:</strong> <?php echo $dept; ?></p>
<hr>
</body>
</html>