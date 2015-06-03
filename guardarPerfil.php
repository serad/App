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
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $pass = $_POST['pass'];

    $consulta = "UPDATE $tabla SET nombre='$nombre',apellido='$apellido',email='$email',pass='$pass' where usuario = '$usuario'";
    $db->consulta($consulta);
}
?>