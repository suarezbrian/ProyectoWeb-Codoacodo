// ENVIO DEL FORMULARIO POR MAIL
let  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let celuRegex = /^[09][0-9]{1,7}$/;

function validarFormulario() 
{

    // Valido el nombre.
    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
        sweetError('El campo nombre esta vacio!.');
        return;
    }
    else if(nombre.length > 10)
    {
        sweetError('El nombre es demaciado largo.');
        return;
    }

    // Valido el mail
    let mail = document.getElementById('mail').value;
    if (!emailRegex.test(mail)) {
        sweetError('El mail no es valido.');
        return;
    }

    // Valido el mensaje
    let mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0 ) {
        sweetError('El mensaje no puede estar vacio.');
        return;
    }

    let timerInterval
    Swal.fire({
      title: 'Muchas gracias por tu mensaje!',
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    })
    
}

function sweetError(valor)
{
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: valor,
      })
}