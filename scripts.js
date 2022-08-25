export {main} from '.mainjs'
  function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("livius").innerHTML = this.responseText;
     
    }
    xhttp.open("GET", "livius.txt");
    xhttp.send();
  }

document.getElementById("test").innerHTML=main
