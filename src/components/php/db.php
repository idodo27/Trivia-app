<?php
 
 header("Content-Type:application/json");
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Origin: http://localhost:3000");
 
 
 define("HOST","fdb27.freehostingeu.com");
 define("USER","3848398_newdb");
 define("PASS","Lr)v?F{^5xs%Gx^V");
 define("DB","3848398_newdb");
 

$con = mysqli_connect(HOST,USER,PASS,DB);
mysqli_set_charset($con, "utf8");

mysqli_close($con);
 ?>