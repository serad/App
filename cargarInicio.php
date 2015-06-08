<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: login.html');
}
else {

    include 'dbCon.php';

    $db = new dbCon();

    $usuario = $_SESSION['usuario'];
    $tabla = $_SESSION['tabla'];

     $consulta = "SELECT count(`mensaje`)as mensajes FROM `mensajes` WHERE `receptor`='$usuario' AND leido = 0";
    $resul = $db->consulta($consulta);

    $datos=$resul->fetch_assoc();
    $datos['nombre']=$usuario;

    $consulta = "SELECT conexion FROM `$tabla` WHERE `usuario`='$usuario'";
    $resul = $db->consulta($consulta);
    $fecha=$resul->fetch_assoc();
    $fecha = strtotime($fecha['conexion']);
    $fecha = date( 'd-m-Y', $fecha );
    $datos['conexion']=$fecha;

    echo json_encode($datos);

}
?>