function mostrarGrafico(asi, a, b, c) {
    $('#grafico').highcharts({
        chart: {
            type: 'column',
            //width: $(window).width()/1.5,
            //height: 400
        },
        title: {
            text: asi
        },
        /*
                subtitle: {
                    text: 'Nombre del alumno'
                },*/
        xAxis: {
            categories: ['Media por trimestre'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'NOTAS'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Primer Trimestre',
            data: [a]
        }, {
            name: 'Segundo Trimestre',
            data: [b]
        }, {
            name: 'Tercer Trimestre',
            data: [c]
        }]
    })
};

function generarGrafico(e, asignatura) {
    var media1 = 0;
    var media2 = 0;
    var media3 = 0;
    var contNotas = 0;
    var totNotas = 0;
    var contNotas2 = 0;
    var totNotas2 = 0;
    var contNotas3 = 0;
    var totNotas3 = 0;
    //Funcion Ajax
    var parametros = {
        asignatura: e
    };
    $.ajax({
        url: 'notaMedia.php',
        type: 'post',
        dataType: 'json',
        data: parametros,
        //Funcion de respuesta
        success: function(response) {
            for (var a in response) {
                if (response[a]['trimestre'] === "1") {
                    totNotas += Number(response[a]['nota']);
                    contNotas++;
                }
                if (response[a]['trimestre'] === "2") {
                    totNotas2 += Number(response[a]['nota']);
                    contNotas2++;
                }
                if (response[a]['trimestre'] === "3") {
                    totNotas3 += Number(response[a]['nota']);
                    contNotas3++;
                }
                //console.log(response[a]);
            }
            media1 = totNotas / contNotas;
            media1 = parseFloat(media1.toPrecision(2))
            media2 = totNotas2 / contNotas2;
            media2 = parseFloat(media2.toPrecision(2))
            media3 = totNotas3 / contNotas3;
            media3 = parseFloat(media3.toPrecision(2))
            media1 = (isNaN(media1)) ? 0 : media1;
            media2 = (isNaN(media2)) ? 0 : media2;
            media3 = (isNaN(media3)) ? 0 : media3;
            mostrarGrafico(asignatura, media1, media2, media3);
        }
    });
}
//profesores
function iniAlumnos(e) {
    /*0: ObjectcodAsig: "20001"media: "5.000000"trimestre: "1"*/
    var n1 = [];
    var n2 = [];
    var n3 = [];
    var a1 = 0;
    var a2 = 0;
    var a3 = 0;
    var asig = e[e.length - 1];
    var asignaturas = [];
    for (z in asig) {
        asignaturas[z] = asig[z]['nombre'];
    }
    for (a in e) {
        if (e[a]['trimestre'] == 1) {
            var b = e[a]['media']
            n1[a1] = parseFloat(Number(b).toPrecision(2));
            a1++;
        }
        if (e[a]['trimestre'] == 2) {
            var b = e[a]['media']
            n2[a2] = parseFloat(Number(b).toPrecision(2));
            a2++;
        }
        if (e[a]['trimestre'] == 3) {
            var b = e[a]['media']
            n3[a3] = parseFloat(Number(b).toPrecision(2));
            a3++;
        }
    }
    $('#iniAlumno').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Nota media por trimestre'
        },
        xAxis: {
            categories: asignaturas
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Notas'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Tercer trimestre',
            data: n3
        }, {
            name: 'Segundo trimestre',
            data: n2
        }, {
            name: 'Primer trimestre',
            data: n1
        }]
    });
}

function generarGraficoIniA() {
    $.ajax({
        url: 'iniNotasAlumnos.php',
        type: 'post',
        dataType: 'json',
        //Funcion de respuesta
        success: function(response) {
            iniAlumnos(response);
        }
    });
}

function totalNotas(todo,titu) {
    console.log(titu)
    $('#iniAlumno').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: titu
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Nota del examen'
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Nota',
            data: todo,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}

function generarTotalNotas(trimestre, codigo, titu) {

    var data = {
        trimestre: trimestre,
        codigo: codigo,
        titu: titu
    }
    $.ajax({
        url: 'totalNotas.php',
        type: 'post',
        data: data,
        dataType: 'json',
        //Funcion de respuesta
        success: function(response) {
            var otro = [];
            for (z in response) {
                var contodo = [];
                contodo.push("Examen " + (Number(z) + 1));
                contodo.push(Number(response[z]['nota']))
                otro.push(contodo);
            }
            console.log(otro,titu);
            totalNotas(otro,titu);
        }
    });
}