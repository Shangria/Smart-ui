// <?php
// $to = "neonchilkk@gmail.com";
// $subject ='Заказ консультации';
// $message .= "Заказ звонка с сайта \r\n";
// $message .= "Тема: ".$_POST['desc']. "\r\n";
// $message .= "Имя: ".$_POST['name']. "\r\n";
// $message .= "Номер телефона: ".$_POST['phone']. "\r\n";
// $headers  = 'MIME-Version: 1.0' . "\r\n";
//   $headers .= 'Content-type: text/html; charset=utf-8'."\r\n";
//   if (mail($to,$subject,$message,"from:hi@gm.com")) {
//     echo 'good';
//     echo $to,$subject,$message ;
//   } else {
//     echo 'error';
//   }
//
//
//
//
// $name = $_POST['name'];
// $phone = $_POST['phone'];
// $desc = $_POST['desc'];
// $token = "1148349678:AAGRBVbuAZ86Bj7RmR2Sre6HFdsfTlAxwwo";
// $chat_id = "-488457206";
// $arr = array(
// 	'Заказ консультации' => " ",
//     'Тема' => $desc,
//   'Имя пользователя: ' => $name,
//   'Телефон: ' => $phone,
// );
//
// foreach($arr as $key => $value) {
//   $txt .= "<b>".$key."</b> ".$value."%0A";
// };
//
// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
//
// ?>


<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "reactform");
$query = "insert into userfeedback (name,email, message)
values(
'" . $_POST['name'] . "',
'" . $_POST['email'] . "',
'" . $_POST['message'] . "'
)";
$result = @mysqli_query($conn, $query);
if ($result) {
    echo json_encode(["sent" => 1, ]);
} else {
    echo json_encode(["sent" => 0, ]);
}
?>