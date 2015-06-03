  function cargarArchivos() {
          //Funcion Ajax
          $.ajax({
                  url: 'cargarArchivos.php',
                  type: 'post',
                  //Funcion de respuesta
                  success: function(response) {
                      $('#lArchivos').html('')
                      $('#lArchivos').append(response)
                  }
              }) //Fin Ajax
      } //Fin CargarArchivos
  function subirArchivos() {
      var file_data = $('#archi').prop('files')[0];
      var form_data = new FormData();
      form_data.append('file', file_data);
      $.ajax({
          url: 'subirArchivo.php',
          dataType: 'text',
          cache: false,
          contentType: false,
          processData: false,
          data: form_data,
          type: 'post',
          success: function() {
              cargarArchivos();
              $('#nArchivo').val('')
              notificacion("Subido correctamente")
              vaciarFile()
          }
      });
  }

  function borrarArchivo() {
    var e = $('#archivo').html()
          //Funcion Ajax
          var parametros = {
              archivo: e,
          }
          $.ajax({
                  url: 'eliminarArchivos.php',
                  type: 'post',
                  data: parametros,
                  //Funcion de respuesta
                  success: function(response) {
                          if (response == 1) {
                              cargarArchivos();
                          }
                      } //fin success
              }) //Fin Ajax
      } //Fin borrarARchivos

          function mostrarSubir () { 

                  $('#btnS').removeClass('hide')  
                  $('#iconoA').removeClass();
                  $('#iconoA').addClass('mdi-image-filter-1');

                }
                function vaciarFile() {
                   $('#archi').val('')
                    $('#nArchivo').val('');
                    $('#btnS').addClass('hide')
                  $('#iconoA').removeClass();
                  $('#iconoA').addClass('mdi-editor-insert-drive-file');
                }
