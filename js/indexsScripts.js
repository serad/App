function muestraHorario() {
    event.preventDefault();
    $('#contenedor > div').fadeOut(400, function() {
        $("#horario").fadeIn(400);
    })
}

function mostrar(idMostrar, t) {
    $('a').removeClass('activo')
    $(t).addClass('activo')
    $('.cont').each(function(index) {
        if ($(this).attr("id") == idMostrar) {
            $(this).slideDown('slow');
        } else {
            $(this).slideUp();
        }
    });
}