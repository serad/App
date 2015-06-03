<?php
session_start();
$usuario = $_SESSION['usuario'];
$tabla = $_SESSION['tabla'];
$dir = "./$tabla/$usuario";
if (is_dir($dir)) {
    $directorio = opendir($dir);
    echo '<ul class="collection with-header">
  <li class="collection-header"><h4>Archivos</h4></li>';
    while ($archivo = readdir($directorio))

    //obtenemos un archivo y luego otro sucesivamente
    {
        if ($archivo == "." || $archivo == "..") {
        }
        else {
            if (!empty($archivo)) {
                echo '  <li class="collection-item"><div><a href="' . $dir . "/" . $archivo . '">' . $archivo . '</a><a id="borrar" href="#"  onclick="borrarArchivo(' . "'" . $archivo . "'" . ')" class="secondary-content"><i class="mdi-action-delete red-text"></i></a></div></li>';
            }

            //cierre empty

        }
    }
    echo '</ul>';
}
?>