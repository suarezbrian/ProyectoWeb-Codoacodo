const form = document.querySelector('.formCarta');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(e)
{
    e.preventDefault();

    const formCarta = new FormData(this);

    const responde = await fetch(this.action, {
        method: this.method,
        body: formCarta,
        headers:{'Accept':'application/json'}
    });

    if(responde.ok)
    {
        alert("funciono");
    }
}

let now = new Date();
let day = ("0" + now.getDate()).slice(-2);
let month = ("0" + (now.getMonth() + 1)).slice(-2);
let today = now.getFullYear()+"-"+(month)+"-"+(day) ;

let dateControl = document.querySelector('input[type="date"]');
dateControl.value = today;






let min = 0;
let max = 23;
let select = document.getElementById('hora');

for (let i = min; i<=max; i++){
    let opt = document.createElement('option');
    opt.value = i;
    if(i >= 0 && i <= 11)
    {
        opt.innerHTML = i + "hs am";
    }
    else
    {
        opt.innerHTML = i + "hs pm";
    }
    
    select.appendChild(opt);
}

