// navbar sidebar

function openNav() 
{
  
  if(parseInt(document.getElementById("mySidebar").style.width) > 0)
  {
    cerrarSideBar();
  }
  else
  {   
    abrirSideBar();
    
    let theLinks = document.querySelectorAll('.sidebar a');

    theLinks.forEach(function (element, index) 
    {
      if(index == 0 && element.id == 'homeSideBar')
      {
        element.href = "/index.html";
      }
      
    });

    document.addEventListener('keydown', (event) => {
      
      let keyValue =  event.key;
  
      if(parseInt(document.getElementById("mySidebar").style.width) > 0 && keyValue == "Escape")
      {
        cerrarSideBar();
      }
  
      }, false);

      var userSelection = document.getElementsByClassName('section');

      for(let i = 0; i < userSelection.length; i++) {
        userSelection[i].addEventListener("click", function() {
          cerrarSideBar();
        })
      }
  
  }

    
}



function cerrarSideBar()
{
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("header").style.marginLeft = "0";
  document.getElementById("mySidebar").style.borderRight = "none";
}

function abrirSideBar()
{
  let mql = window.matchMedia('(max-width: 1366px)');  

  if(mql.matches == true)
  {
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("header").style.marginLeft = "0%";
  }
  else
  {
    document.getElementById("mySidebar").style.width = "20%";
    document.getElementById("header").style.marginLeft = "20%";
    document.getElementById("mySidebar").style.borderRight = "solid white 1px"; 
  }

}
