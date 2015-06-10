<?php
session_start();

$usuario = $_SESSION['usuario'];
$tabla = $_SESSION['tabla'];
$asignatura = $_POST['asignatura'];

include 'dbCon.php';

$db = new dbCon();

$query = "SELECT codAsig,nota,trimestre FROM `notas` WHERE codAsig='$asignatura' ORDER BY trimestre,codasig";

$result = $db->consulta($query);

$rows = array();
while ($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}

echo json_encode($rows);
?>