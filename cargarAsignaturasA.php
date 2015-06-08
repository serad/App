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
    

    $consulta = "SELECT codAsig,nombre FROM asignaturas WHERE codCurso = (
        SELECT codCurso FROM alumnos WHERE usuario = '$usuario')";
    $result = $db->consulta($consulta);

    $rows = array();
    while ($r = mysqli_fetch_assoc($result)) {
        $rows[] =  $r;
    }
    
    echo json_encode($rows);
}
?>