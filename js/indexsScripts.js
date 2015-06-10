function muestraHorario() {
    event.preventDefault();
    $('#contenedor > div').fadeOut(400, function() {
        $("#horario").fadeIn(400);
    })
}

function mostrar(idMostrar, t) {
    $('a').removeClass('activo')
    $('a').removeClass('z-depth-4')
    $(t).addClass('activo')
    $(t).addClass('z-depth-4')
    $('.cont').each(function(index) {
        if ($(this).attr("id") == idMostrar) {
            $(this).removeClass('hide');
        } else {
            $(this).addClass('hide');
        }
    });
    if (idMostrar == 'principal') {
        $('#calendar').fullCalendar('destroy');
        calendario()
    }
}

function invervaloMensajes() {
    $.ajax({
        url: 'cargarInicio.php',
        type: 'post',
        dataType: 'json',
        success: function(response) {
            if (response['mensajes'] > 0) {
                notificacion("Tienes " + response['mensajes'] + " mensaje/s sin leer")
            }
        }
    })
}