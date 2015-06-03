function validarReg() {
    var pass = $('#inputPass').val();
    var pass2 = $('#inputPassR').val();
    var usuario = $('#inputUsr').val();
    var nombre = $('#inputNom').val();
    var apellido = $('#inputApe').val();
    var curso = $('#curso').val();
    var email = $('#inputEmail').val();
    if (usuario == "" || pass == "" || nombre == "" || apellido == "" || curso == "" || email == "") {
        mostrarInfo('Debe rellenar todos los campos', 'red-text');
    } else {
        if (pass == pass2) {
            if (validarUsuario())
                if (validarPass()) getValuesReg();
        } //cierra comprobar contraseñas iguales
        else {
            mostrarInfo('Las contraseñas no coinciden', 'red-text');
        }
    }
}

function validarUsuario() {
    var usr = $('#inputUsr');
    if (usr.val().length < 5) {
        mostrarInfo('Usuario no valido', 'red-text');
        return false;
    }
    return true;
    //validarPass();
}

function validarPass() {
        var pass = $('#inputPass');
        if (pass.val().length < 5) {
            mostrarInfo('Contraseña no valida', 'red-text');
            return false;
        }
        return true;
    }
    //Funcion para optener los valores del formulario.
function getValuesReg() {
        var usuario = $('#inputUsr').val();
        var pass = $('#inputPass').val();
        var nombre = $('#inputNom').val();
        var apellido = $('#inputApe').val();
        var curso = $('#curso').val();
        var email = $('#inputEmail').val();
        registraUsuario(usuario, pass, nombre, apellido, curso, email);
    }
    //Funcion que comprobara si el usuario esta registrado, usara PHP junto a Ajax
function registraUsuario(usuario, pass, nombre, apellido, curso, email) {
        //Objecto JSON
        var parametros = {
            "usuario": usuario,
            "pass": pass,
            "nombre": nombre,
            "apellido": apellido,
            "curso": curso,
            "email": email
        };
        //Funcion Ajax
        $.ajax({
            data: parametros,
            url: 'reg.php',
            type: 'post',
            //Funcion de respuesta
            success: function(response) {
                console.log(response);
                if (response == 1) {
                    notificacion('Registrado con exito', function() {
                        location.href = "login.html";
                    })
                } else notificacion('No se pudo registrar el usuario')
            }
        }); //Fin Ajax
    } //Fin registraUsuario