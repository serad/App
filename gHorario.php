<?php

//Guarda el horario en un archivo
$hor = fopen("horario", "w");
$html = $_POST['horario'];
fwrite($hor, $html);
fclose($hor);
?>