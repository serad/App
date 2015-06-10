<?php
session_start();

$tipo = $_POST['tipo'];

if (!isset($_SESSION['usuario'])) {
    echo "no";
}
else {
    if ($tipo != $_SESSION['tabla']) {
        echo "no";
    }
    else echo $_SESSION['usuario'];
}
?>