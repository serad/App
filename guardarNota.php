<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: login.html');
}
else {

    include 'dbCon.php';

    $db = new dbCon();

    $alumno = $_POST['alumno'];
    $nota = $_POST['nota'];
    $trimestre = $_POST['tri'];
    $asignatura = $_POST['asig'];

    $consulta = "INSERT INTO notas VALUES ('','$alumno',$asignatura,'$nota','$trimestre')";
    $result = $db->consulta($consulta);
    echo $result;
    echo $consulta;
}
?>