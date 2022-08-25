
  function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("livius").innerHTML = this.responseText;
     
    }
    xhttp.open("GET", "livius.txt");
    xhttp.send();
  }

  function loadCart() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("livius").innerHTML = this.responseText;
     
    }
    xhttp.open("GET", "carthagee.html");
    xhttp.send();
  }
