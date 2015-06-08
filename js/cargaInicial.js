var interMensajes;
function cargaIni (){
    cargarPost();
    cargarAsignaturas();
    cargarArchivos();
    generarTotalNotas();
    comprobarLog();
    datosIni();
    interMensajes = setInterval(invervaloMensajes,60000);
    actualizarConexion();
  
    
}
function cargaIniA(){

    cargarAsignaturasA();
    cargarArchivos();
    generarGraficoIniA();
    comprobarLog();
    datosIni();
    interMensajes = setInterval(invervaloMensajes,60000);
    actualizarConexion();
    cargarHorario()
    
    
}
function datosIni(){

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
function actualizarConexion(){


    $.ajax({
        url: 'actualizarConexion.php',
        type: 'post',
        success: function(response) {
            

        }
    })
}



