<?php
    session_start();
    include 'db.php';
if(isset($_POST["username"], $_POST["password"]))
    {

 

    $con = mysqli_connect(HOST,USER,PASS,DB);
    $user = mysqli_real_escape_string($con, $_POST["username"]);
    $pass = mysqli_real_escape_string($con, $_POST["password"]);
    $sql = "SELECT username from login WHERE username=MD5('$user') AND password=MD5('$pass')";
 
    $res = mysqli_query($con,$sql);
    if(mysqli_num_rows($res)==1)
    {
       echo $user;
       exit();
    }
    else
    {
        echo("Permission Denied");
        exit();
    }
}
else
{
    header( "refresh:3; form.php" );
    echo("Missing Variables");
    exit();
}
 
mysqli_close($con); 
?>
