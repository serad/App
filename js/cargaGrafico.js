function mostrarGrafico(asi, a, b, c) {
    $('#grafico').highcharts({
        chart: {
            type: 'column',
            width: 900,
            height: 400
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
        /*tooltip: {
             headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
             pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                 '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
             footerFormat: '</table>',
             shared: true,
             useHTML: true
         },*/
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