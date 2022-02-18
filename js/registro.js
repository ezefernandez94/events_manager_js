$(document).ready( function() {

  $('.btn').click( function() {
    var contador = 0;
    
    $('.form-control').each( function( index, element ) {
      //validation for fields to be complete
      if( $( this ).val().length == 0 ){
        contador = contador + 1;
      }

    } );

    // terms validation
    if( !($('#acepto').is(':checked')) ){
      contador = contador + 1;
    }

    if( contador > 0 ){
      // alert if at least one of the required fields are empty 
      alert( 'Todos los campos marcados con * son obligatorios' );
      return false;

    } else {
      // check if password's length is less than 8
      if( $('#contrasena').val().length < 8 ){
        alert('La contraseña debe tener una longitud igual o mayor que 8');
        return false;
      }
      // check if passwords are not the same
      if( $('#confirmacion').val() != $('#contrasena').val() ){
        alert( 'Las contraseñas ingresadas no coinciden' );
        return false;
      }
      // email checking
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if ( !re.test( $('#email').val() ) ) {
        alert( 'Email inválido' );
        return false;
      }
      // if all it's OK ...
      alert('Usuario creado exitosamente');
      return true;

    }
  });

});

/*
function validar( formulario ) {
  
  // Mail validation

  // Password validation
  if( document.getElementById('contrasena').value.length < 7 ){
    alert( 'La contraseña debe tener una longitud igual o mayor que 8' );
    return false;
  }

  // Password confirmation validation
  if( document.getElementById('confirmacion').value != document.getElementById('contrasena').value ){
    alert( 'Las contraseñas ingresadas no coinciden' );
    return false;
  }
  // User validation

  // Terms validations

  //Expresion regular del correo
  return true;
}
*/