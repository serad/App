<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: login.html');
}
else {
 $usuario = $_SESSION['usuario'];
    $tabla = $_SESSION['tabla'];
    $dir = "$tabla/$usuario";
    
    
    $hor = fopen("$dir/eventos", "r");
    
    $con=0;
    while (!feof($hor)) { 
    
    $z[$con]=fgets($hor);
    $con=$con+1;
    
}
    
    
    //$z[0]=json_encode(fgets($hor));
    //$z[1]=json_encode(fgets($hor));
    echo json_encode($z);
//echo json_encode(fread($hor, filesize("$dir/eventos")));
}
?>