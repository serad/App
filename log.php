<?php
include 'dbCon.php';

$db = new dbCon();

$usuario = strtolower($_POST['usuario']);
$pass = $_POST['pass'];
$tabla = $_POST['tabla'];

sleep(2);
$consulta = "SELECT usuario FROM $tabla WHERE usuario = '$usuario' && pass ='$pass';";

$resul = $db->consulta($consulta);

if ($resul->num_rows == 1) {
    echo 'encontrado';
    session_start();
    $_SESSION['usuario'] = $usuario;
    $_SESSION['tabla'] = $tabla;
}
else echo 'no';
?>