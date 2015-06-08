function validarRegP() {
    var pass = $('#inputPass').val();
    var pass2 = $('#inputPassR').val();
    if (pass == pass2) {
        if (validarUsuarioP())
            if (validarPassP()) getValuesRegP();
    } //cierra comprobar contraseñas iguales
    else {
        mostrarInfo('Las contraseñas no coinciden', 'text-danger', 'glyphicon-remove');
    }
}

function validarUsuarioP() {
  
    var usr = $('#inputUsr');
    if (usr.val().length < 5) {
        mostrarInfo('Formato incorrecto', 'text-danger', 'glyphicon-remove');
        return false;
    }
    return true;
    //validarPass();
}

function validarPassP() {
        alert("dos")
        var pass = $('#inputPass');
        if (pass.val().length < 5) {
            mostrarInfo('Formato incorrecto', 'text-danger', 'glyphicon-remove');
            return false;
        }
        return true;
    }
    //Funcion para optener los valores del formulario.
function getValuesRegP() {
        var usuario = $('#inputUsr').val();
        var pass = $('#inputPass').val();
        var nombre = $('#inputNom').val();
        var apellido = $('#inputApe').val();
        var email = $('#inputEmail').val();
      var asignaturas = []
        $("input:checked").each(function () {
            asignaturas.push($(this).val())
        })
        registraUsuarioP(usuario, pass, nombre, apellido, email,asignaturas);
    }
    //Funcion que comprobara si el usuario esta registrado, usara PHP junto a Ajax
function registraUsuarioP(usuario, pass, nombre, apellido, email,asignaturas) {
        //Objecto JSON
        var parametros = {
            "usuario": usuario,
            "pass": pass,
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "asignaturas" : asignaturas,
        };
        //Funcion Ajax
        $.ajax({
            data: parametros,
            url: 'regP.php',
            type: 'post',
            //Funcion de respuesta
            success: function(response) {
                console.log(response);
            }
        }); //Fin Ajax
    } //Fin registraUsuario