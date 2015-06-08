<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: login.html');
}
else {
    
    $usuario = $_SESSION['usuario'];
    $tabla = $_SESSION['tabla'];
    
    $dir = "$tabla/$usuario";
    if(!is_dir($dir)){
    mkdir($dir);
    }

    $post = $_POST['notas'];
   // print_r($eventos);
    
   $hor = fopen("$dir/post", "w");   
   fwrite($hor,$post);  
   fclose($hor);

    echo "1";  
}



?>