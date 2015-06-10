var interMensajes;

function cargaIni() {
    comprobarLog('profesores')
    cargarPost();
    cargarAsignaturas();
    cargarArchivos();
    generarTotalNotas();
    datosIni();
    interMensajes = setInterval(invervaloMensajes, 60000);
    actualizarConexion();
    $(document).ready(function() {
        $(window).resize(function() {
            if ($(window).width() > 903) {
                $('#calendar').fullCalendar('destroy');
                calendario();
            }
        })
        calendario();
        $('.tooltipped').tooltip({
            delay: 50
        });
        $('.modal-trigger').leanModal();
        $('.button-collapse').sideNav({
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
        $('#infoModal').openModal()
        $('.collapsible').collapsible({
            accordion: false
        });
        $('.fc-prev-button').click(function() {
            cargarEventos();
        });
        $('.fc-next-button').click(function() {
            cargarEventos();
        });
    })
}

function cargaIniA() {
    comprobarLog('alumnos')
    cargarAsignaturasA();
    cargarArchivos();
    generarGraficoIniA();
    datosIni();
    interMensajes = setInterval(invervaloMensajes, 60000);
    actualizarConexion();
    $(window).resize(function() {
        if ($(window).width() > 903) {
            $('#calendar').fullCalendar('destroy');
            calendario();
        }
    });
    $(document).ready(function() {
        calendario();
        $('.tooltipped').tooltip({
            delay: 50
        });
        $('.modal-trigger').leanModal();
        $('.button-collapse').sideNav({
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
        $('#infoModal').openModal()
        $('.collapsible').collapsible({
            accordion: false
        });
        cargarHorario()
    })
}

function cargarModal(nombre) {
    $('#archivo').html(nombre)
    $('#modal1').openModal();
}

function datosIni() {
    $.ajax({
        url: 'cargarInicio.php',
        type: 'post',
        dataType: 'json',
        success: function(response) {
            $('#nombre').text(response['nombre'])
            $('#nm').text(response['mensajes'])
            $('#ultimaConex').text(response['conexion'])
            $('#nombre2').text(response['nombre'])
            $('#nm2').text(response['mensajes'])
            $('#ultimaConex2').text(response['conexion'])
        }
    })
}

function actualizarConexion() {
    $.ajax({
        url: 'actualizarConexion.php',
        type: 'post',
        success: function(response) {}
    })
}

function cargarPost() {
    $.ajax({
        url: 'cargarPost.php',
        type: 'post',
        //Funcion de respuesta
        success: function(response) {
            $('#postit').val(response)
        }
    });
}

function guardarPost() {
    var z = $('#postit').val()
    var parametros = {
        notas: z
    }
    $.ajax({
        url: 'guardarPost.php',
        data: parametros,
        type: 'post',
        //Funcion de respuesta
        success: function(response) {
            console.log(response, "holaaa")
        }
    });
}