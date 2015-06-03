function validarLogin() {
    if (validarUsuario())
        if (validarPass()) getValues();
}

function validarUsuario() {
    var usr = $('#inputUsr');
    if (usr.val().length < 5) {
        mostrarInfo('Formato incorrecto', 'red-text');
        return false;
    }
    return true;
}

function validarPass() {
    var pass = $('#inputPass');
    if (pass.val().length < 5) {
        mostrarInfo('Formato incorrecto', 'red-text');
        return false;
    }
    return true;
}