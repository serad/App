     var evento;
  function calendario() {

            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                defaultDate: new Date(),
                selectable: true,
                height: window.innerWidth / 4,
                eventClick: function (calEvent, jsEvent, view) {
                    notificacion("<h5><i class='small mdi-action-star-rate yellow-text' ></i>Evento:" + calEvent.title + "</h5>")
                },
                selectHelper: true,
                select: function (start, end) {
                    var title = prompt('Nuevo evento');
                    var eventData;
                    if (title) {
                        eventData = {
                            title: title,
                            start: start,
                            end: end
                        };
                        $('#calendar').fullCalendar('renderEvent', eventData, false); // stick? = true
                    }
                    $('#calendar').fullCalendar('unselect');
                },
                editable: true,
                eventDragStop: function (event, jsEvent) {
                    var trashEl = jQuery('#calendarTrash');
                    var ofs = trashEl.offset();
                    var x1 = ofs.left;
                    var x2 = ofs.left + trashEl.outerWidth(true);
                    var y1 = ofs.top;
                    var y2 = ofs.top + trashEl.outerHeight(true);

                    if (jsEvent.pageX >= x1 && jsEvent.pageX <= x2 &&
                            jsEvent.pageY >= y1 && jsEvent.pageY <= y2) {
                        $('#calendar').fullCalendar('removeEvents', event._id);
                    }
                },
                eventLimit: true, // allow "more" link when too many events
                events: evento
            },cargarEventos());



        }

        function cargarEventos() {

            $.ajax({
                url: 'cargarEventos.php',
                type: 'post',
                dataType: 'json',
                //Funcion de respuesta
                success: function (response) {

                    for (i in response) {
                        evento = JSON.parse(response[i]);
                        $('#calendar').fullCalendar('renderEvent', evento);
                         $( document ).scrollTop(25)
                    }


                }
            });

        }
        function guardaEventos() {

            var z = $('#calendar').fullCalendar('clientEvents')

            var eventos = [];
            for (i in z) {

                eventos[i] = {start: $.datepicker.formatDate('yy-mm-dd', new Date(z[i]['_start']['_d'])), end: $.datepicker.formatDate('yy-mm-dd', new Date(z[i]['_end']['_d'])), title: z[i]['title']}
                console.log(z[i]['_start']['_d'])
            }
            var parametros = {event: eventos}
            $.ajax({
                url: 'guardaEventos.php',
                data: parametros,
                type: 'post',         

                //Funcion de respuesta
                success: function (response) {

                    notificacion("Eventos guardados")
                }
            });


        }//fin funcion