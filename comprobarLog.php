<?php
session_start();

if (!isset($_SESSION['usuario'])) {
    echo "no";
}
else echo $_SESSION['usuario']
?>