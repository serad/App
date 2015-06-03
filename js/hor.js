 var este = null;
 $(document).on("mousedown", ".hor", function(event) {
     switch (event.which) {
         case 3:
             //alert('boton izquierdo');
             este = $(this);
             var a = prompt("Introduce el nombre de la asignatura");
             if (a == null) a = "";
             if (a.length < 21) {
                 $(this).text(a)
             } else {
                 alert("no puede contener mas de 20 caracteres")
             };
             break;
         case 2:
             //alert('boton central');
             break;
         case 1:
             //alert('boton derecho');
             $('td').css({
                 "border": "2px #f4f7fa solid"
             });
             $(this).css({
                 "border": "2px grey solid"
             });
             este = $(this);
             break;
     }
 });
 $(document).on("click", ".colores", function() {
     nColor = $(this).css("background-color");
     este.css("background-color", nColor);
     $('td').css({
         "border": "2px #f4f7fa solid"
     });
 });

 function guardarHorario() {
     $('td').css({
         "border": "2px #f4f7fa solid"
     });
     var parametros = {
         "horario": $('.contenedor').html()
     };
     $.ajax({
         data: parametros,
         url: 'gHorario.php',
         type: 'post',
         success: alert("Horario Guardado")
     })
 }

 function cargarHorario() {
     $.ajax({
         url: 'cHorario.php',
         success: function(response) {
             $('.contenedor').html(response)
         }
     })
 }

 function volver() {
     window.history.back();
 }