<?php
include 'db.php';

if(isset($_POST['username'],$_POST['password'], $_POST['firstname'],$_POST['lastname'])){
        $con = mysqli_connect(HOST,USER,PASS,DB);
        if($con == false){
                die("ERROR: Could not connect. " .mysqli_connect_error());
        }
         mysqli_set_charset($con, "utf8");
         $sql = "INSERT INTO login (id, username, password, firstname, lastname) VALUES(?, MD5(?), MD5(?), ?, ?)";
         if($statement = mysqli_prepare($con, $sql)){
                 mysqli_stmt_bind_param($statement, "issss", $id, $user, $pass, $firstname, $lastname);
                 
                 $id = null;
                 $user = $_POST['username'];
                 $pass = $_POST['password'];
                 $firstname = $_POST['firstname'];
                 $lastname = $_POST['lastname'];
                 if(mysqli_stmt_execute($statement)){
                         echo "success";
                         mysqli_stmt_close($statement);
                         exit();
                         }else{
                         echo "ERROR: Could not execute query: $sql. " .mysqli_error($con);
              }}else{
                    echo "ERROR: Could not prepare query: $sql. ".mysqli_error($con);
                    }
               mysqli_stmt_close($statement);
         }else{
               header("Refresh:3, url=index.php");
               echo "Missing Variables";
               exit;
               }
?>              