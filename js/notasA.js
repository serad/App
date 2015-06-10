function cargarAsignaturasA() {
    //Funcion Ajax
    $.ajax({
            url: 'cargarAsignaturasA.php',
            type: 'post',
            dataType: 'json',
            //Funcion de respuesta
            success: function(response) {
                for (i in response) {
                    console.log(response)
                    $('#asignaturasGra').append('<h5  id=' + response[i]['codAsig'] + '>' + response[i]['nombre'] + '<br><a href="#" class="link" onclick="generarTotalNotas(1,' + response[i]['codAsig'] + ",'" + response[i]['nombre'] + "'" + ')"> <span class="small mdi-image-looks-one black-text"></span></a><a href="#" class="link" onclick="generarTotalNotas(2,' + response[i]['codAsig'] + ",'" + response[i]['nombre'] + "'" + ')"> <span class="small mdi-image-looks-two black-text"></span></a><a href="#" class="link" onclick="generarTotalNotas(3,' + response[i]['codAsig'] + ",'" + response[i]['nombre'] + "'" + ')"> <span class="small mdi-image-looks-3 black-text"></span></a>' + '</h5>');
                }
            }
        }) //Fin Ajax
}