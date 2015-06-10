<!DOCTYPE html>
<html>
    <head>
        <title>Registrarse</title>
        <meta charset='utf-8'>
        <link rel="icon" href="img/favicon1.ico">
        <link href="css/materialize.min.css" rel="stylesheet">
        <link href="css/registro.css" rel="stylesheet">
<style type="text/css">

</style>
    </head>

<body>
    <div class="indigo center">
        <span class="titulo white-text">Formulario de registro</span>
    </div>

    <!-- Formulario contacto -->
  <div class="reg-container z-depth-1 indigo lighten-5" >

    <!-- Texto de error/informacion -->
    <div class="row no-margin">
     <div class="center-align no-margin">
             <ul  id='textoError' class="center-align" style="display: none">
                        <li style="opacity: 0" id="errorMsg"></li>
              </ul>
        </div>
    </div>

    <!-- Datos personales -->
    <div class="row">
        <div class="col m6 s12">
            <div class="input-field">
                <input id="inputNom" type="text" name="nombre"  data-delay="500" data-position="top" data-tooltip="De 3 a 35 caracteres(Solo letras)" class="tooltipped" maxlength="35">
                <label for="inputNom">Nombre</label>
            </div>
        </div>
          <div class="col m6 s12">
            <div class="input-field">
                <input id="inputApe" type="text" name="apellido"  data-delay="500" data-position="top" data-tooltip="De 3 a 35 caracteres" class="tooltipped" maxlength="35">
                <label for="inputApe">Apellido</label>
            </div>
        </div>
    </div>
    <!-- Datos de usuario -->
    <div class="row">
        <div class="col m6  s12">
            <div class="input-field">
                <input id="inputUsr" type="text" name="usr"  data-delay="500" data-position="top" data-tooltip="De 5 a 25 caracteres" class="tooltipped" maxlength="25">
                <label for="inputUsr">Usuario</label>
            </div>
        </div>
         <div class="col m6 s12">
            <div class="input-field">
                <input id="inputEmail" type="email" name="mail" maxlength="25">
                <label for="inputEmail">Email</label>
            </div>
        </div>

    </div>

    <!-- Select de los cursos -->
      <div class="row">
        <div class="col m12 s12">
            <div class="input-field">
                <select id="curso">
                 <?php

// muestra los cursos disponbles en la base de datos
include 'dbCon.php';

$db = new dbCon();
$query = "SELECT * FROM cursos";
$cursos = $db->consulta($query);

while ($fila = mysqli_fetch_assoc($cursos)) {

    //print_r($fila);
    $codCur = $fila['codCurso'];
    $nombre = $fila['nombre'];
    echo "<option value=$codCur>$nombre</option>";
}
?>
                </select>
                <label for="curso">Curso</label>
            </div>
        </div>
    </div>

        <!-- Contraseña -->
    <div class="row">
        <div class="col m6 s12">
            <div class="input-field">
                <input id="inputPass" type="password" name="pass" data-delay="500" data-tooltip="De 5 a 25 caracteres" class="tooltipped"  maxlength="25">
                <label for="inputPass">Contraseña</label>
            </div>
        </div>
        <div class="col m6 s12">
            <div class="input-field">
                <input id="inputPassR" type="password" name="passR" data-delay="500" data-tooltip="De 5 a 25 caracteres" class="tooltipped"  maxlength="25">
                <label for="inputPassR">Repite Contraseña</label>
            </div>
        </div>
    </div>
        <!-- Botones -->
    <div class="row">
        <div class="col m8 offset-m2 s12">
            <div class="row">
                <div class="col m6">
                    <button class="btn btn-large waves-effect waves-light deep-orange accent-4 z-depth-2" type="button" onclick="window.history.go(-1)"><span class="hide-on-med-and-down">Volver</span><i class="mdi-hardware-keyboard-backspace left"></i>
                    </button>
                </div>
                <div class="col m5 offset-m1 ">
                    <button class="btn btn-large waves-effect waves-light deep-orange accent-2 z-depth-2" type="button" onclick="validarReg()"><span class="hide-on-med-and-down">Registrar</span><i class="mdi-action-note-add right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>


    </div>

    <!-- FrameWorks -->
    <script src="js/otros/jquery-2.1.3.min.js"></script>
    <script src="js/otros/materialize.min.js"></script>

    <script src="js/log.js"></script>
    <script src="js/validator.js"></script>
    <script src="js/perfil.js"></script>
    <script src="js/reg.js"></script>
    <script src="js/notificacion.js"></script>



    <script type="text/javascript">
        $(document).ready(function() {
        $('select').material_select();
         });
    </script>

    </body>
</html>



