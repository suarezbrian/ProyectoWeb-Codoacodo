// INPUT TIPOS DATE, CARGAR EL CALENDARIO CON LA FECHA ACTUAL.
let now = new Date();
let day = ("0" + now.getDate()).slice(-2);
let month = ("0" + (now.getMonth() + 1)).slice(-2);
let today = now.getFullYear()+"-"+(month)+"-"+(day) ;

let dateControl = document.querySelector('input[type="date"]');
dateControl.value = today;


// INPUT HORA DE NACIMIENTO
let min = 0;
let max = 23;
let select = document.getElementById('selectH');

for (let i = min; i<=max; i++){
    let opt = document.createElement('option');
    opt.value = i;
    if(i >= 0 && i <= 11)
    {
        opt.innerHTML = i + "hr am";
    }
    else
    {
        opt.innerHTML = i + "hr pm";
    }
    
    select.appendChild(opt);
}

min = 1;
max = 60;
select = document.getElementById('selectM');

for (let i = min; i<=max; i++){
    let opt = document.createElement('option');
    opt.value = i;

    opt.innerHTML = i + " min";  
   
    
    select.appendChild(opt);
}



// ENVIO DEL FORMULARIO POR MAIL
let  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const form = document.querySelector('.formCarta');
form.addEventListener('submit', validarFormulario);
  
  async function validarFormulario(e) 
  {

    e.preventDefault();

    // Valido el nombre.
    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    else if(nombre.length > 10)
    {
      alert('El nombre es demaciado largo');
      return;
    }

    // Valido el mail
    let mail = document.getElementById('mail').value;
    if (!emailRegex.test(mail)) {
      alert('El mail no es válida');
      return;
    }

    // Validao el pais
    let pais = document.getElementById('country').value;
    if (pais.length > 2) {
      alert('No ha seleccionado ningun país.');
      return;
    }

    const formCarta = new FormData(this);

    const responde = await fetch(this.action, {
        method: this.method,
        body: formCarta,
        headers:{'Accept':'application/json'},        
    });

    if(responde.ok)
    {
        alert("funciono");
    }
  }


