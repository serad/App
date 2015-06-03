<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: login.html');
}
else {

    include 'dbCon.php';

    $db = new dbCon();

    $_SESSION['usuario'];

    $usuario = $_SESSION['usuario'];
    $tabla = $_SESSION['tabla'];

    $datos = array();

    $consulta = "SELECT * from $tabla where usuario = '$usuario'";
    $resul = $db->consulta($consulta);

    $fila = $resul->fetch_assoc();

    echo json_encode($fila);
}
?>