function cerrarSesion() {
    $.ajax({
        url: 'cerrarSesion.php',
        type: 'post',
        //Funcion de respuesta
        success: function(response) {
            window.location = "login.html"
        }
    });
}

function comprobarLog(tipo) {
    var parametros = {
        "tipo": tipo
    }
    $.ajax({
        url: 'comprobarLog.php',
        type: 'post',
        data: parametros,
        //Funcion de respuesta
        success: function(response) {
            $('#usuario').html(response)
            if (response == "no") {
                location.replace('login.html');
            }
        }
    });
}