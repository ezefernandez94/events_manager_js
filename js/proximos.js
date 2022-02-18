$(document).ready(function () {
  // AJAX Request for JSON data
  $.ajax({

    url: "http://127.0.0.1:5500/info.json"
  
  }).done( function( respuesta ){
    // when success ..
    let fechaActual = respuesta.fechaActual;
    let contador = 0;
    let fechasOrdenadas = [];

    $.each( respuesta.eventos, function( i, item ){
      // taking only future events
      if( item.fecha >= fechaActual ){
        // sorting by date
        if( contador == 0 ){

          fechasOrdenadas.push( item );
          contador++;

        } else {

          let longitud = fechasOrdenadas.length;

          for( let puntero = 0; puntero < longitud; puntero++ ){

            if( fechasOrdenadas[puntero].fecha > item.fecha ){

              fechasOrdenadas.splice( puntero, 0, item );
              puntero = longitud;

            } else if( puntero == ( longitud - 1 ) ) {

              fechasOrdenadas.push( item );
              puntero = longitud;
          
            }
          
          }
          
          contador++;

        }

      }

    });    
    
    let cantidad = fechasOrdenadas.length;
    let htmlInsert = '';
    // building html for every event
    for( let contadorReordenado = 0; contadorReordenado < cantidad; contadorReordenado++ ){

      htmlInsert = htmlInsert + '<p class="lead clickeable" value="'+ fechasOrdenadas[contadorReordenado].id +'" >' + fechasOrdenadas[contadorReordenado].nombre + '</p><p id="detalle_' + fechasOrdenadas[contadorReordenado].id + '" ></p>';

    }
    // inserting html in element
    $("#proximos").html( htmlInsert );

    $('.clickeable').click(function(){
      // when one of the elemnts containing one of the events is clicked ..
      for( let contadorInterno = 0; contadorInterno < fechasOrdenadas.length; contadorInterno++ ){
        
        if( fechasOrdenadas[contadorInterno].id == $(this).attr('value') && $("#detalle_"+fechasOrdenadas[contadorInterno].id ).html() == '' ){
          // building, inserting and showing html if not displayed yet
          htmlInsertDetalle = '<p class="lead">' + fechasOrdenadas[contadorInterno].descripcion + ' - ' + fechasOrdenadas[contadorInterno].fecha  + ' </br> En el ' + fechasOrdenadas[contadorInterno].lugar + ', contamos con ' + fechasOrdenadas[contadorInterno].invitados + ' invitados y el valor de la entrada es de ARS ' + fechasOrdenadas[contadorInterno].precio + '</p>';
          $("#detalle_"+fechasOrdenadas[contadorInterno].id ).html(htmlInsertDetalle);
          $("#detalle_"+fechasOrdenadas[contadorInterno].id ).slideDown('slow');
          contadorInterno = fechasOrdenadas.length;

        } else if( fechasOrdenadas[contadorInterno].id == $(this).attr('value') && $("#detalle_"+fechasOrdenadas[contadorInterno].id ).html() != '' ){
          // hidding html if clicked and already displayed
          $("#detalle_"+fechasOrdenadas[contadorInterno].id ).html('');

        }

      }      

    });  

  });

});

