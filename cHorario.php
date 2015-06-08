<?php

//Carga el archivo horario
session_start();
$usuario = $_SESSION['usuario'];
$tabla = $_SESSION['tabla'];


$dir = "$tabla/$usuario";
    if(!is_dir($dir)){
    mkdir($dir);
    }
if(!file_exists("$dir/horario"))
    copy("horario", "$dir/horario");
    $directorio = opendir($dir);
$hor = fopen("$dir/horario", "r");
echo fread($hor, filesize("$dir/horario"));
?>