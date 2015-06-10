<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: login.html');
}
else {

    include 'dbCon.php';
    $id = $_POST['mensaje'];
    $db = new dbCon();

    $consulta = "DELETE FROM mensajes where idMensaje = '$id'";

    $result = $db->consulta($consulta);

    echo $result;
}
?>