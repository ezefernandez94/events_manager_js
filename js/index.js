$( document ).ready( function(){
  // AJAX Request for JSON data
  $.ajax({

    url: "http://127.0.0.1:5500/info.json"
  
  }).done( function( respuesta ){
    // when success ..
    var fechaActual = respuesta.fechaActual;
    var eventosPasados = [];
    var eventosFuturos = [];
    // separate events in future and past
    $.each( respuesta.eventos, function( i, item ){
      
      if( item.fecha >= fechaActual ){
        eventosFuturos.push( item );
      } else {
        eventosPasados.push( item );
      }

    });

    // building html for future and past events
    $("#proximos").html( '<p class="lead">' + eventosFuturos[0].nombre + ' - ' + eventosFuturos[0].descripcion + ' - ' + eventosFuturos[0].fecha + '</p></br><p class="lead">'
    + eventosFuturos[1].nombre + ' - ' + eventosFuturos[1].descripcion + ' - ' + eventosFuturos[1].fecha + '</p>');
    $("#pasados").html( '<p class="lead">' + eventosPasados[0].nombre + ' - ' + eventosPasados[0].descripcion + ' - ' + eventosPasados[0].fecha + '</p></br><p class="lead">'
    + eventosPasados[1].nombre + ' - ' + eventosPasados[1].descripcion + ' - ' + eventosPasados[1].fecha + '</p>');
    
  });

});
