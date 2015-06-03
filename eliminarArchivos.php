<?php
session_start();

$usuario = $_SESSION['usuario'];
$tabla = $_SESSION['tabla'];
$archi = $_POST['archivo'];

$archivo = "./$tabla/$usuario/$archi";

$result = unlink($archivo);

echo $result;
