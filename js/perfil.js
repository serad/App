var datos;

function cargarPerfil() {
    $.ajax({
        url: 'cargarPerfil.php',
        type: 'post',
        dataType: 'json',
        success: function(response) {
            datos = response;
            $('#inputNom').val(datos.nombre);
            $('#inputApe').val(datos.apellido);
            $('#inputEmail').val(datos.email);
            $('#inputPass').val(datos.pass);
            $('#encabezado').append(" - " + datos.usuario);
            $('#inputNom').attr("placeholder", datos.nombre);
            $('#inputApe').attr("placeholder", datos.apellido);
            $('#inputEmail').attr("placeholder", datos.email);
            $('#inputPass').attr("placeholder", datos.pass);
        }
    })
}

function guardarPerfil() {
        if ($('#inputNom').val() != datos.nombre) {
            if ($('#inputNom').val() != "") {
                datos.nombre = $('#inputNom').val();
            }
        }
        if ($('#inputApe').val() != datos.apellido) {
            if ($('#inputApe').val() != "") {
                datos.apellido = $('#inputApe').val();
            }
        }
        if ($('#inputEmail').val() != datos.email) {
            if ($('#inputEmail').val() != "") {
                datos.email = $('#inputEmail').val();
            }
        }
        if ($('#inputPass').val() != datos.pass) {
            if ($('#inputPass').val().length >= 5) {
                datos.pass = $('#inputPass').val();
            }
        }
        console.log(datos.nombre);
        console.log(datos.apellido);
        console.log(datos.email);
        console.log(datos.pass);
        $.ajax({
                url: 'guardarPerfil.php',
                type: 'post',
                data: datos,
                dataType: 'json',
                success: function(response) {
                    console.log(response);
                }
            }) //cierra ajax
    } //cierra funcion