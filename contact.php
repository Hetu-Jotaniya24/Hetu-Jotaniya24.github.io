<?php
// if ($_POST["submit"]<>'') { 
//     $ToEmail = 'niyuvora7@gmail.com'; 
//     $EmailSubject = 'Site contact form'; 
//     $mailheader = "From: ".$_POST["email"]."\r\n"; 
//     $mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
//     $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
//     $MESSAGE_BODY = "Name: ".$_POST["name"].""; 
//     $MESSAGE_BODY .= "Email: ".$_POST["email"].""; 
//     $MESSAGE_BODY .= "Comment: ".($_POST["message"]).""; 
//     mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure"); 
//     echo "success";
// }
//$toEmail = "niyuvora7@gmail.com";
    //$mailHeaders = "From: " . $_POST["name"] . "<". $_POST["email"] .">\r\n";
    $ToEmail = 'hetujotaniya24hj@gmail.com'; 
    //$ToEmail = 'niyuvora7@gmail.com'; 
    $EmailSubject = "Subject: ".$_POST["form_subject"]; 
    $mailheader = "From: ".$_POST["email"]."\r\n"; 
    $mailheader .= "Reply-To: ".$_POST["email"]."\r\n"; 
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
    $MESSAGE_BODY = "Name: ".$_POST["name"]."<br/>";
    $MESSAGE_BODY .= "Email: ".$_POST["email"]."<br/>";
    $MESSAGE_BODY .= "Comment: ".($_POST["form_message"])."<br/>";
    if(mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader)) {
        print "<p class='success'>Thank you! will get back in touch with you soon!.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?> 
