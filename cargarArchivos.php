<?php
session_start();
$usuario = $_SESSION['usuario'];
$tabla = $_SESSION['tabla'];
$dir = "./$tabla/$usuario";
if (is_dir($dir)) {
    $directorio = opendir($dir);
    echo '<ul class="collection with-header">
  <li class="collection-header"><h5>Listado de archivos:</h5></li>';
    while ($archivo = readdir($directorio))

    //obtenemos un archivo y luego otro sucesivamente
    {
        if ($archivo == "." || $archivo == ".." || $archivo == "eventos" || $archivo == "horario" || $archivo == "post") {
        }
        else {
            if (!empty($archivo)) {
                echo '  <li class="collection-item truncate"><div class="row"><div class="col m10 s9 truncate"><a target="_blank" href="' . $dir . "/" . $archivo . '" >' . $archivo . '</a></div><div class="col m2 s3"><a id="borrar" href="#"  onclick="cargarModal(' . "'" . $archivo . "'" . ')" class="secondary-content"><i class="small mdi-action-delete red-text"></div></div></i></a></div></li>';
            }

            //cierre empty


        }
    }
    echo '</ul>';
}
?>