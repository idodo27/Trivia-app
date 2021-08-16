<?php
 
 header("Content-Type:application/json");
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Origin: http://localhost:3000");
 
 
 define("HOST","name_of_server_host");
 define("USER","Database_user");
 define("PASS","Database_password");
 define("DB","Database_user");
 

$con = mysqli_connect(HOST,USER,PASS,DB);
mysqli_set_charset($con, "utf8");

mysqli_close($con);
 ?>
