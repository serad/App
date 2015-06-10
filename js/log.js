var tabla;
   $(document).ready(function(){
        $('.tooltipped').tooltip({delay: 50});
    });
//Funcion que cambia mensajes informativos del login/Registro.
function mostrarInfo(texto, clase) {
    $('#errorMsg').text(texto);
    $('#textoError').removeClass();
    $('#textoError').addClass(clase);
    $('#textoError').slideDown();
    $(".no-margin").css("margin-bottom", "-7px")
    Materialize.showStaggeredList('#textoError')
}
//Funcion para optener los valores del formulario.
function getValues() {
    var usuario = $('#inputUsr').val()
    var pass = $('#inputPass').val()
    tabla = $('input[name="tabla"]:checked').val()
    comprobarUsuario(usuario, pass, tabla)
}
//Funcion que comprobara si el usuario esta registrado, usara PHP junto a Ajax
function comprobarUsuario(usuario, pass, tabla) {
    //Objecto JSON
    var parametros = {
        "usuario": usuario,
        "pass": pass,
        "tabla": tabla
    };
    //Funcion Ajax
    $.ajax({
            data: parametros,
            url: 'log.php',
            type: 'post',
            //Cambiara el avatar por un gif de carga
            beforeSend: function() {
                $("#carga").removeClass('hide');
                mostrarInfo('Comprobando', 'teal-text');
            },
            //Funcion de respuesta
            success: function(response) {
                console.log(response);
                if (response == 'encontrado') {
                    if (tabla == 'alumnos') window.location.href = "indexAlumno.html";
                    if (tabla == 'profesores') window.location.href = "indexProfesor.html";
                } else mostrarInfo('Usuario y contraseña no coinciden', 'red-text');
                $("#carga").addClass('hide');
            }
        }) //Fin Ajax
} //Fin comprobarUsuario