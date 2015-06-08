<?php
session_start();

$usuario =$_SESSION['usuario'];
$tabla =$_SESSION['tabla'];

include 'dbCon.php';

$db = new dbCon();
$datos=array();



$consulta = "SELECT codAsig,trimestre,avg(nota) as 'media' FROM `notas` where usuario='$usuario' group by trimestre,codAsig";
$result = $db->consulta($consulta);
while ($r = mysqli_fetch_assoc($result)) {
    $codAsignatura[] = $r;
    
}
 

$consulta = "SELECT nombre FROM asignaturas WHERE codCurso IN (
        SELECT codCurso FROM alumnos WHERE usuario = '$usuario')";
   $result = $db->consulta($consulta);

    $rows = array();
    while ($r = mysqli_fetch_assoc($result)) {
        $rows[] =  $r;
    }

    $codAsignatura[]=$rows;
//echo json_encode($rows);
echo json_encode($codAsignatura);
?>