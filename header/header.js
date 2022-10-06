// navbar sidebar
function openNav() {

    if(parseInt(document.getElementById("mySidebar").style.width) > 0)
    {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("header").style.marginLeft = "0";
      document.getElementById("mySidebar").style.borderRight = "none";
    }
    else
    {
      document.getElementById("mySidebar").style.width = "20%";
      document.getElementById("header").style.marginLeft = "20%";
      document.getElementById("mySidebar").style.borderRight = "solid white 1px";    
      
    }
  
  }