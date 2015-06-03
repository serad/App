<?php
include 'dbCon.php';

$db = new dbCon();

$usuario = strtolower($_POST['usuario']);
$pass = $_POST['pass'];
$tabla = "alumnos";
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$curso = $_POST['curso'];
$email = $_POST['email'];

$consulta = "INSERT INTO $tabla VALUES ('$usuario','$pass','$nombre','$apellido','$email','$curso')";

$respuesta = $db->consulta($consulta);
echo $respuesta;
?>