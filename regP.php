<?php
include 'dbCon.php';

$db = new dbCon();

$usuario = $_POST['usuario'];
$pass = $_POST['pass'];
$tabla = "profesores";
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$asignaturas = $_POST['asignaturas'];


$consulta = "INSERT INTO $tabla VALUES ('$usuario','$pass','$nombre','$apellido','$email',CURDATE())";

$respuesta = $db->consulta($consulta);
if ($respuesta == 1) {
    $dir = "$tabla/$usuario";
    mkdir($dir);
    fopen("$dir/eventos", "w");
    $post=fopen("$dir/post", "w");
    fwrite($post,"Introduce aqui tus notas");
}
if ($respuesta == 1) {

    foreach ($asignaturas as $value) {
        $con = "INSERT INTO clasesimpartir values('$usuario','$value')";
        $db->consulta($con);
    }
    echo $respuesta;
}
?>