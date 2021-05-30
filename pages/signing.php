<?php
include 'db.php';
?>
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="../stylesheets/style.css">
    <link rel="shortcut icon" type="image/png" href="/Untitled design (6).png" />
</head>

<body>
    <div class="container">
    <div class="container-object">
        <h1>Sign In</h1>
        <br>
        <form class="form-holder" action="process.php" method="POST">
            <p class="">
                <label>Username</label>
                <input class="" type="text" id="user" name="user"></input>
            </p>
            <p class="">
                <label>Password</label>
                <input class="" type="password" id="pass" name="pass"></input>
            </p>
            <p>
                <input class="" type="submit" id="btn" value="Login"></input>
            </p>
        </form>
        <a href="jobsigning.php">Sign in as a job recruiter</a>
    </div>
    </div>
</body>

</html>