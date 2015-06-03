<!DOCTYPE html>
<html>
    <head>
        <title>Registrarse</title>
        <meta charset='utf-8'>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/login.css" rel="stylesheet">
        <link href="css/editarPerfil.css" rel="stylesheet">
        <link href="css/main.css" rel="stylesheet">
       
    </head>

    <body>
        <div class="container">
            <div class="card card-container">        
                <header class="panel-heading">
                    <span style="color:white"><b id="encabezado">Nuevo Profesor</b></span>          
                </header>
                <form class="form-signin" onsubmit="return false;">
                    <p id='textoError' class="text-danger" style="display:none" >
                        <span class="glyphicon"></span>
                        <span id="errorMsg"></span>
                    </p>
                    <div class="form-group">
                        <label>Usuario</label>
                        <input type="text" id="inputUsr" class="form-control" placeholder="" value=""autofocus name="nombre">
                    </div>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" id="inputNom" class="form-control" placeholder="" value=""autofocus name="nombre">
                    </div>
                    <div class="form-group">
                        <label>Apellido</label>
                        <input type="text" id="inputApe" class="form-control" placeholder="" value="" name="ape">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" id="inputEmail" class="form-control" placeholder=""  value="" name="email">
                    </div>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" id="inputPass" class="form-control" placeholder="" value="" name="pass">
                    </div>
                    <div class="form-group">
                        <label>Repetir Contraseña</label>
                        <input type="password" id="inputPassR" class="form-control" placeholder="" value="" name="passR">
                    </div>

                    <button class="btn btn-lg btn-primary btn-block btn-signin"  type="submit" onclick="validarRegP()">Registrarse</button>
                </form><!-- /form -->
                <button class="btn btn-lg btn-primary btn-block btn-signin btn-reg" onclick="window.history.go(-1);
                        return false;">Volver</button>
            </div><!-- /card-container -->
        </div><!-- /container -->

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/Notifier.js"></script>
        <script src="js/log.js"></script>
        <script src="js/validator.js"></script>
        <script src="js/perfil.js"></script>
        <script src="js/reg.js"></script>
        <script src="js/regP.js"></script>

    </body>
</html>



