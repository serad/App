<?php
//Carga el archivo horario
session_start();
$usuario = $_SESSION['usuario'];
$tabla = $_SESSION['tabla'];


$dir = "$tabla/$usuario";
    if(!is_dir($dir)){
    mkdir($dir);
    }
if(!file_exists("$dir/post"))
   echo "Introduce aqui tus notas";
else {
    $directorio = opendir($dir);
    $hor = fopen("$dir/post", "r");
    echo fread($hor, filesize("$dir/post"));
}


?>