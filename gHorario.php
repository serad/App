<?php

//Guarda el horario en un archivo

session_start();
$usuario = $_SESSION['usuario'];
$tabla = $_SESSION['tabla'];


$dir = "$tabla/$usuario";
$hor = fopen("$dir/horario", "w");
$html = $_POST['horario'];
fwrite($hor, $html);
fclose($hor);
?>