<?php
session_start();

$usuario = $_SESSION['usuario'];
$tabla = $_SESSION['tabla'];
$dir = "$tabla/$usuario";
if(!is_dir($dir)){
    mkdir($dir);
}

  if ( 0 < $_FILES['file']['error'] ) {
        echo 'Error: ' . $_FILES['file']['error'] . '<br>';
    }
    else {
        move_uploaded_file($_FILES['file']['tmp_name'], "$dir/" . $_FILES['file']['name']);
    }




?>