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
            
            if (response == 1) {
                notificacion("Mensaje enviado",verMensajes)
                $('#InputUsuario').val('');
                $('#InputAsunto').val('');
                $('#InputTextArea').val('');
            } else notificacion("Error al enviar el mensaje")
        }
    })
}

function verMensajes() {

    $('#formEnviar').hide();
    $('#mensajesRecibidos').show();
    $('#mensajesRecibidos').empty();
    $.ajax({
        method: 'post',
        url: 'verMensajes.php',
        dataType: 'json',
        success: function(response) {
            console.log(response);


            for (i in response) {


              var leido = (response[i]['leido'] == '0')? 'green-text' : '';

                var mensaje = '<ul class="collapsible" data-collapsible="accordion"><li>';
                mensaje += '<div class="collapsible-header truncate" onclick="marcarLeido(this,'+"'"+response[i]['idMensaje']+"'"+')"><i class="mdi-communication-email '+leido+'">'
                mensaje +='</i><span class="destacado">'+ response[i]['emisor'] + '</span>:' + response[i]['asunto'] +'</div>'
                mensaje += '<div class="collapsible-body"><p>'+ response[i]['mensaje'] +'</p>'
                mensaje +='<a href="#" onclick="confirmarBorrarMensaje('+"'"+response[i]['idMensaje']+"'"+')"><i class="small mdi-action-delete red-text right"></i></div>'
                mensaje += '</li></ul>'
                $('#mensajesRecibidos').append(mensaje)
            $('.collapsible').collapsible({
                  accordion : false });
            }
        }
    })
}

function confirmarBorrarMensaje(idMensaje) {
    $('#mensajeId').html(idMensaje)

    $('#modalMensajes').openModal();

}

function borrarMensaje() {

 var e = $('#mensajeId').html()

    var parametros = {
              mensaje: e,
          }
          $.ajax({
                  url: 'eliminarMensajes.php',
                  type: 'post',
                  data: parametros,
                  //Funcion de respuesta
                  success: function(response) {
                    console.log(response)
                          if (response == 1) {
                              verMensajes();
                          }
                      } //fin success
              }) //Fin Ajax
      } //Fin borrarARchivos
function marcarLeido(t,e){
  $(t).children('i').removeClass('green-text')

   var parametros = {
              mensaje: e,
          }
          $.ajax({
                  url: 'marcarLeido.php',
                  type: 'post',
                  data: parametros,
                  //Funcion de respuesta
                  success: function(response) {
                    console.log(response)

                      } //fin success
              }) //Fin Ajax
}