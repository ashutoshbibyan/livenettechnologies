<?php

$name = $_POST["name"];
$mobileNo = $_POST["mobileNo"];
$comments = $_POST["comments"];




function validateName($name){

    $result = false ;

    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
        $nameErr = "Only letters and white space allowed";
        echo($nameErr);
        echo("<br>");
      }
    else{
        $result = true;
    }

    return $result;

}

function validateMobileNo($mobileNo){

    $result = false;

    if(preg_match('/^[0-9]{10}+$/', $mobileNo)){
        $result = true ;
    }
    else{
        $result = false;
    }


    return $result;

}

if(validateName && validateMobileNo){
   
    echo(json_encode(sendMail()));
}

   function sendMail(){
    $to = "livenettechnologies@gmail.com"; // this is your Email address
    $name =     $_POST["name"];
    $mobileNo = $_POST["mobileNo"];
    $comments = $_POST["comment"];
    $subject = "Connection Enquiry";

    $message = "Name: " . $name . "\nMobileNo: " . $mobileNo . "\nMessage:  " . $comments;

    $headers = "From:" . $name ;

    $isSent = mail($to,$subject,$message,$headers);

    return $isSent;
    }




?>