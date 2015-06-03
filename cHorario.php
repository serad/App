<?php

//Carga el archivo horario
$hor = fopen("horario", "r");
echo fread($hor, filesize("horario"));
?>