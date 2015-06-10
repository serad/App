<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header('Location: login.html');
}
else {

    $usuario = $_SESSION['usuario'];
    $tabla = $_SESSION['tabla'];

    $dir = "$tabla/$usuario";
    if (!is_dir($dir)) {
        mkdir($dir);
    }

    $eventos = $_POST['event'];

    // print_r($eventos);

    $hor = fopen("$dir/eventos", "w");
    $html = json_encode($_POST['event']);
    foreach ($eventos as $k => $e) {
        $texto = json_encode($e);
        fwrite($hor, $texto . "\n");
    }

    fclose($hor);

    echo "1";
}
?>