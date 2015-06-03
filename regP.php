<?php

include 'dbCon.php';

$db = new dbCon();

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];
$tabla = "profesores";
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];      


$consulta = "INSERT INTO $tabla VALUES ('$usuario','$pass','$nombre','$apellido','$email')";

$db->consulta($consulta);

echo $consulta;

?>