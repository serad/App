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
    $TsTmp=  date("Y-m-d");
    
    
   
    
    $consulta = "UPDATE $tabla SET conexion='$TsTmp' WHERE usuario='$usuario'";
    $db->consulta($consulta);
    
    
}

