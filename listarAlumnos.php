<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: login.html');
}
else {

    include 'dbCon.php';

    $db = new dbCon();

    $asig = $_POST['asig'];

    $consulta = "SELECT nombre,apellido,usuario FROM alumnos WHERE codCurso = (SELECT codCurso FROM asignaturas WHERE codAsig = '$asig')";
    $result = $db->consulta($consulta);
    $rows = array();

    while ($r = mysqli_fetch_assoc($result)) {
        $rows[] = array_map('utf8_encode', $r);
    }

    echo json_encode($rows);
}
?>