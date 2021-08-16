<?php
    include 'db.php';
    
    $con = mysqli_connect(HOST,USER,PASS,DB);
    
    $sql = "SELECT question, answer1, answer2, answer3 from questions";
 
    $res = mysqli_query($con,$sql);
    
    if(mysqli_num_rows($res)>0)
    {
       $riddle = array();
       
       while($row =mysqli_fetch_array($res))
    {
        $riddle[] = 
                array(
                        "question" => $row[0],
                        "answer1" => $row[1],
                        "answer2" => $row[2],
                        "answer3" => $row[3]
                );
        
    }
       echo json_encode((object)$riddle);
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