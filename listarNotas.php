<?php
include 'dbCon.php';

$db = new dbCon();

$asig = $_POST['asig'];
$alumn = $_POST['alumno'];

$consulta = "SELECT nota,trimestre FROM notas WHERE usuario = '$alumn' AND codAsig = $asig";
$result = $db->consulta($consulta);
$rows = array();
while ($r = mysqli_fetch_assoc($result)) {
    $rows[] = array_map('utf8_encode', $r);
}

echo json_encode($rows);
?>