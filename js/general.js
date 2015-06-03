function cerrarSesion() {
    $.ajax({
        url: 'cerrarSesion.php',
        type: 'post',
        //Funcion de respuesta
        success: function(response) {
            location.replace('login.html');
        }
    });
}

function comprobarLog() {
    $.ajax({
        url: 'comprobarLog.php',
        type: 'post',
        //Funcion de respuesta
        success: function(response) {
            $('#usuario').html(response)
            if (response == "no") {
                location.replace('login.html');
            }
        }
    });
}