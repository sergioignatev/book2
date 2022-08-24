

export {main} from './main.js'

function loadCart() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("livius").innerHTML = this.responseText;
     
    }
    xhttp.open("GET", "carthagee.html");
    xhttp.send();
  }
  function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("livius").innerHTML = this.responseText;
     
    }
    xhttp.open("GET", "livius.txt");
    xhttp.send();
  }
document.querySelector("button").innerHTML=main
document.querySelector("button").addEventListener("click",loadCart)