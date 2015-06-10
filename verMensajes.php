<?php
include 'dbCon.php';

$db = new dbCon();
session_start();
$recp = $_SESSION['usuario'];

$consulta = "SELECT idMensaje,emisor,asunto,mensaje,leido FROM mensajes WHERE receptor = '$recp' order by idMensaje DESC";

$result = $db->consulta($consulta);
$rows = array();

while ($r = mysqli_fetch_assoc($result)) {

    $rows[] = $r;
}

echo json_encode($rows);
?>