function enviarMensaje() {
    r = $('#InputUsuario').val();
    a = $('#InputAsunto').val();
    m = $('#InputTextArea').val();
    var parametros = {
        receptor: r,
        asunto: a,
        mensaje: m,
    }
    console.log(parametros)
    $.ajax({
        data: parametros,
        method: 'post',
        url: 'enviarMensaje.php',
        success: function(response) {
            console.log(response);
            if (response == 1) {
                notificacion("Enviado", "Mensaje enviado", "success")
            } else notificacion("Error", "Error al enviar el mensaje", "error")
        }
    })
}

function verMensajes(e) {
    $(e).siblings('div').hide();
    $('#mensajesRecibidos').show();
    $('#mensajesRecibidos').empty();
    $.ajax({
        method: 'post',
        url: 'verMensajes.php',
        dataType: 'json',
        success: function(response) {
            console.log(response);
            for (i in response) {
                var mensaje = "<div>";
                mensaje += "<h2>" + response[i]['emisor'] + "<h2>"
                mensaje += "<h4>Asunto :<h4><h5>" + response[i]['asunto'] + "<h5>"
                mensaje += "Mensaje :" + response[i]['mensaje']
                $('#mensajesRecibidos').append(mensaje)
            }
        }
    })
}