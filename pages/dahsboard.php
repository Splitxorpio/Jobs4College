<?php

include 'db.php';
$username = $_POST['user'];
$password = $_POST['pass'];


$username = stripcslashes($username);
$password = stripcslashes($password);
$username = mysqli_real_escape_string($conn, $username);
$password = mysqli_real_escape_string($conn, $password);

$result = mysqli_query($conn, "SELECT * FROM jobuser WHERE username = '$username' and password = '$password'")
    or die("Failed to query database" . mysqli_error($link));
$row = mysqli_fetch_array($result);
?>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../stylesheets/style.css">
    <link href="Untitled design (6).png" rel="shortcut icon" type="image/png">
    <meta charset="UTF-8">
</head>

<body>
    <div class="container">
    <div class="container-object">
        <h1 class="title">
            <?php
            if ($row['username'] == $username && $row['password'] == $password) {
                echo "👋 Hello " . $row['username'] . "!";
            } else {
                header("Location:signing.php");
            }
            ?>
        </h1>
        <br>
        <a class="olink" href="jobl.html">Add Jobs!</a>
    </div>
        </div>
</body>

</html>