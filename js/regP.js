function validarRegP() {
    var pass = $('#inputPass').val();
    var pass2 = $('#inputPassR').val();
    var usuario = $('#inputUsr').val();
    $('#inputUsr').removeClass('invalid');
    var nombre = $('#inputNom').val();
    $('#inputNom').removeClass('invalid');
    var apellido = $('#inputApe').val();
    var curso = $('#curso').val();
    var email = $('#inputEmail').val();
    $('#inputEmail ').removeClass('invalid');
    if (usuario == "" || pass == "" || nombre == "" || apellido == "" || curso == "" || email == "") {
        mostrarInfo('Debe rellenar todos los campos', 'red-text');
    } else {
        if (pass == pass2) {
            if (validarNombre())
                if (validarUsuario())
                    if (validarEmail())
                        if (validarPass()) getValuesRegP();
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
        usr.addClass('invalid')
        return false;
    }
    return true;
    //validarPass();
}

function validarNombre() {
    var nom = $('#inputNom').val();
    if (nom.length < 3) {
        $('#inputNom').addClass('invalid');
        mostrarInfo('Nombre incorrecto', 'red-text');
        return false;
    } else if (nom.match(/^[a-zA-Z]+$/)) {
        return true;
    } else {
        $('#inputNom').addClass('invalid');
        mostrarInfo('Nombre incorrecto', 'red-text');
        return false;
    }
}

function validarEmail() {
    var email = $('#inputEmail').val();
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(email)) {
        return true;
    } else {
        mostrarInfo('Email no válido', 'red-text');
        $('#inputEmail').addClass('invalid');
        return false;
    }
}

function validarPass() {
    var pass = $('#inputPass');
    if (pass.val().length < 5) {
        mostrarInfo('Contraseña no válida', 'red-text');
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
    $("input:checked").each(function() {
        asignaturas.push($(this).val())
    })
    if (asignaturas.length > 0) registraUsuarioP(usuario, pass, nombre, apellido, email, asignaturas);
    else notificacion("Debe seleccionar al menos una asignatura")
}
//Funcion que comprobara si el usuario esta registrado, usara PHP junto a Ajax
function registraUsuarioP(usuario, pass, nombre, apellido, email, asignaturas) {
    //Objecto JSON
    var parametros = {
        "usuario": usuario,
        "pass": pass,
        "nombre": nombre,
        "apellido": apellido,
        "email": email,
        "asignaturas": asignaturas,
    };
    //Funcion Ajax
    $.ajax({
        data: parametros,
        url: 'regP.php',
        type: 'post',
        //Funcion de respuesta
        success: function(response) {
            console.log(response);
            if (response == 1) {
                notificacion("Registrado correctamente", function() {
                    location.href = "login.html";
                })
            } else notificacion("No se pudo registrar, intente con otro nombre de usuario")
        }
    }); //Fin Ajax
} //Fin registraUsuario