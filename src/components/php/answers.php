<?php
    include 'db.php';
    
    $con = mysqli_connect(HOST,USER,PASS,DB);
    
    $sql = "SELECT question, answer from answers";
 
    $res = mysqli_query($con,$sql);
    
    if(mysqli_num_rows($res)>0)
    {
       $ans = array();
       
       while($row =mysqli_fetch_array($res))
    {
        $ans[] = 
                array(
                        "question" => $row[0],
                        "answer" => $row[1],
                );
        
    }
       echo json_encode((object)$ans);
       mysqli_close($con);
       exit();
    }
    else
    {
        header( "refresh:3; url=form.php" );
        echo("Permission Denied");
        mysqli_close($con);
        exit();
    }


    header( "refresh:3; form.php" );
    echo("Missing Variables");
    exit();

 
 
    
?>