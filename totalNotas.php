<?php
session_start();

$usuario =$_SESSION['usuario'];
$tabla =$_SESSION['tabla'];

include 'dbCon.php';

$db = new dbCon();
$datos=array();
$codasig=$_POST['codigo'];
$trimestre=$_POST['trimestre'];

$consulta = "SELECT nota FROM notas WHERE usuario='$usuario' and trimestre='$trimestre' and codAsig='$codasig'";


$result = $db->consulta($consulta);
    
    $rows = array();
    while ($r = mysqli_fetch_assoc($result)) {
        $rows[] =  $r;
    }

echo json_encode($rows);
?>