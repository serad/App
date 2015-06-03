  var asig;

  function cargarAsignaturas() {
          //Funcion Ajax
          $.ajax({
                  url: 'cargarAsignaturas.php',
                  type: 'post',
                  dataType: 'json',
                  //Funcion de respuesta
                  success: function(response) {
                      console.log(response)
                      for (i in response) {
                          $('#asignaturas').append('<h3 style="color: #FFF" id=' + response[i]['codAsig'] + '>' + response[i]['nombre'] + '<a href="#" class="link" onclick="listarAlumnos(' + response[i]['codAsig'] + ')"> <span class="glyphicon glyphicon-search" aria-hidden="true"></span></a>' + '</h3>');
                          $('#estadisticas').append('<h3 style="color: #FFF" id=' + response[i]['codAsig'] + '>' + response[i]['nombre'] + '<a href="#" class="link" onclick="generarGrafico(' + response[i]['codAsig'] + ",'" + response[i]['nombre'] + "'" + ')"> <span class="glyphicon glyphicon-stats" aria-hidden="true"></span></a>' + '</h3>');
                      }
                  }
              }) //Fin Ajax
      } //Fin CargarAsignatura
  function listarAlumnos(codAsig) {
          asig = codAsig
          parametros = {
                  asig: codAsig
              }
              //Funcion Ajax
          $.ajax({
                  url: 'listarAlumnos.php',
                  type: 'post',
                  dataType: 'json',
                  data: parametros,
                  //Funcion de respuesta
                  success: function(response) {
                      $('#listaAlumnos').html('');
                      $('#listaAlumnos').append('<h1>' + $('#' + codAsig).text() + '</h1><h3>Nombre: </h1>');
                      console.log(response)
                      for (i in response) {
                          $('#listaAlumnos').append('<h4 style="color: #FFF">' + response[i]['nombre'] + " " + response[i]['apellido'] + '<span style="color: #333">' + " <a href='#' onclick='listarNotas(" + '"' + response[i]['usuario'] + '"' + ")' class='link'><span class='glyphicon glyphicon-search' aria-hidden='true'></span>" + "</a></span>" + "</h4>" + "<div id='" + response[i]['usuario'] + "' class='alumnos' style='display:none; overflow:hidden'>" + "<div class='notas'>" + "<div class=tr1>1º Trimestre: </div>" + "<div class=tr2>2º Trimestre: </div>" + "<div class=tr3>3º Trimestre: </div>" + "</div>" + "<div class='notasE col-xs-6' style='display:none;'>" + "<div class='col-lg-3'><span style='font-size:120%'>Nota: </span> <input  class='form-control' type='number' min='0' max='10' value='5'></div>" + "<div class='col-lg-3'><span style='font-size:120%'>Trismetre: </span> <input class='form-control' type='number' min='1' max='3' value='1'></div>" + "<div class='col-lg-4' style='margin-top: 26px'><span style='font-size:120%'></span> <span class='glyphicon glyphicon-ok btn btn-xs btn-success ' aria-hidden='true' style='color:white;margin-left: 5px;top;top: 0px;' onclick='guardarNota()'></span></div>" + "</div>" + "</div>");
                      }
                  }
              }) //Fin Ajax
      } //Fin Listar Alumno
  var alumnoE;

  function listarNotas(alumn) {
          parametros = {
                  asig: asig,
                  alumno: alumn
              }
              //Funcion Ajax
          $.ajax({
                  url: 'listarNotas.php',
                  type: 'post',
                  dataType: 'json',
                  data: parametros,
                  //Funcion de respuesta
                  success: function(response) {
                      $(".alumnos").hide();
                      $('#' + alumn).show();
                      $('.notasE').show();
                      $('.tr1').html('1º Trimestre: ')
                      $('.tr2').html('2º Trimestre: ')
                      $('.tr3').html('3º Trimestre: ')
                      alumnoE = alumn;
                      for (i in response) {
                          if (response[i]['trimestre'] == 1) {
                              $('.tr1').append(response[i]['nota'] + " | ");
                          }
                          if (response[i]['trimestre'] == 2) {
                              $('.tr2').append(response[i]['nota'] + " | ");
                          }
                          if (response[i]['trimestre'] == 3) {
                              $('.tr3').append(response[i]['nota'] + " | ");
                          }
                      }
                  }
              }) //Fin Ajax
      } //Fin Listar Notas
  function guardarNota() {
      var nota = $("#" + alumnoE + " input")[0].value
      var trimestre = $("#" + alumnoE + " input")[1].value
      var parametros = {
              alumno: alumnoE,
              nota: nota,
              tri: trimestre,
              asig: asig
          }
          //Funcion Ajax
      $.ajax({
          url: 'guardarNota.php',
          type: 'post',
          data: parametros,
          //Funcion de respuesta
          success: function(response) {
              listarNotas(parametros.alumno)
          }
      })
  }