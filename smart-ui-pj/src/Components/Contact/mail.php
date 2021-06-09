<?php
$to = "shangrialena@gmail.com";
$subject ='smart ui mailer';
$message .= "test \r\n";
foreach ($_POST as $value){
    $message.= $value."\r\n";
}
$headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8'."\r\n";
  if (mail($to,$subject,$message,"from:hi@gm.com")) {
    echo 'good';
    echo '<br>'.$to.'<br>',$subject.'<br>',$message.'<br>' ;
  } else {
    echo 'error';
  }
?>