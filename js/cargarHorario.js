function cargarHorario() {
    $.ajax({
        url: 'cHorario.php',
        success: function(response) {
            $('.horario').html(response)
        }
    })
}