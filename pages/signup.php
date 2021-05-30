<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="../stylesheets/style.css">
    <link href="Untitled design (6).png" rel="shortcut icon" type="image/png">
</head>

<body>
    <div class="container">
    <div class="container-object">
        <h1 class="title">Sign Up</h1>
        <br>
        <form action="register.php" method="post" class="form-holder">
            <label class="container-input">Username</label>
            <input class="start" type="text" name="username" id="username" alt="Username" placeholder="Username">
            <br>
            <label class="container-input">Password</label>
            <input class="start" type="password" name="password" id="password" alt="Username" placeholder="Password">
            <br>
            <input class="start" type="submit" name="register" value="Sign Up"></input>
        </form>
        <br>
        <p>Already have an account? <a href="signing.php" class="start">Sign In!</a></p>
        <a href="interviewsignup.php">Sign Up as a Job Recruiter</a>
    </div>
    </div>
</body>

</html>