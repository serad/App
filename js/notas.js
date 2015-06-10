var asig;

function cargarAsignaturas() {
    //Funcion Ajax
    $.ajax({
            url: 'cargarAsignaturas.php',
            type: 'post',
            dataType: 'json',
            //Funcion de respuesta
            success: function(response) {
                var notas = '<ul class="collapsible" data-collapsible="accordion">'
                for (i in response) {
                    notas += '<li>'
                    notas += '<div class="collapsible-header"><i class="mdi-action-list"></i>'
                    notas += response[i]['nombre']
                    notas += '</div><div class="collapsible-body" id=b' + response[i]['codAsig'] + '><p>'
                    notas += '</p></div></li>'
                    listarAlumnos(response[i]['codAsig'])
                    $('#asignaturasGra').append('<h5  id=' + response[i]['codAsig'] + '>' + response[i]['nombre'] + '<a href="#" class="link" onclick="generarGrafico(' + response[i]['codAsig'] + ",'" + response[i]['nombre'] + "'" + ')"> <span class="small mdi-editor-insert-chart black-text"></span></a>' + '</h5>');
                }
                notas += '</ul>'
                $('#asignaturas').append(notas)
                $('.collapsible').collapsible({
                    accordion: false
                });
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
                var alum = "<ul  class='collapsible' data-collapsible='accordion'>"
                for (i in response) {
                    alum += "<li>"
                    alum += "<div class='collapsible-header' onclick='listarNotas(" + codAsig + ",this," + '"' + response[i]['usuario'] + '"' + ")' >" + response[i]['nombre']
                    alum += " " + response[i]['apellido'] + "<i class='small mdi-action-view-headline'></i> </div>"
                    alum += "<div class='collapsible-body'>"
                    alum += "<p class='tr1'></p>"
                    alum += "<p class='tr2'></p>"
                    alum += "<p class='tr3'></p>"
                    alum += "<p class='Anotas'></p>"
                    alum += "</div></li>";
                }
                alum += "</ul>"
                $('#b' + codAsig).children().append(alum)
                $('.collapsible').collapsible({
                    accordion: false
                });
            }
        }) //Fin Ajax
} //Fin Listar Alumno
var alumnoE;

function listarNotas(asi, t, alumn) {
    console.log(t, "this")
    asig = asi;
    parametros = {
            asig: asi,
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
                $('.tr1').html('1º Trimestre: ')
                $('.tr2').html('2º Trimestre: ')
                $('.tr3').html('3º Trimestre: ')
                $('.Anotas').html('Añadir Nota nueva:')
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
                inpN = "<div class='row'>"
                inpN += "<div class='col m6 s12'>"
                inpN += "<div class='input-field'>"
                inpN += "<input id='notaA' type='number' min=0 max=10 /><label for='notaA'>Nota</span>"
                inpN += "</div>"
                inpN += "</div>"
                inpN += "<div class='col m6 s12'>"
                inpN += "<div class='input-field'>"
                inpN += "<input id='trimestreA' type='number' min=1 max=3 /><label for='trimestreA'>Trimestre</span>"
                inpN += "</div>"
                inpN += "</div><a href='#' onclick='guardarNota(this)'> <i class='small mdi-content-save green-text'></i></a>"
                inpN += "</div>"
                $(t).next().find('.Anotas').append(inpN)
            }
        }) //Fin Ajax
} //Fin Listar Notas
function guardarNota(t) {
    var nota = $("#notaA").val()
    var trimestre = $("#trimestreA").val()
    var parametros = {
        alumno: alumnoE,
        nota: nota,
        tri: trimestre,
        asig: asig
    }
    console.log(parametros)
        //Funcion Ajax
    $.ajax({
        url: 'guardarNota.php',
        type: 'post',
        data: parametros,
        //Funcion de respuesta
        success: function(response) {
            $(t).parent().parent().parent().prev().trigger('click')
            $(t).parent().parent().parent().prev().trigger('click')
            notificacion("Nota guardada")
        }
    })
}