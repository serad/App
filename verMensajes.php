<?php 
include 'dbCon.php';

$db = new dbCon();
session_start();
$recp = $_SESSION['usuario'];

$consulta = "SELECT emisor,asunto,mensaje FROM mensajes WHERE receptor = '$recp'";

$result = $db->consulta($consulta);
$rows = array();

while($r = mysqli_fetch_assoc($result)) {
    $rows[] = array_map('utf8_encode', $r);      
}


echo json_encode($rows);


?>