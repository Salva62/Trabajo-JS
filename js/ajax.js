function cargar(url, contenedorId) {
    // leemos el archivo.
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./views/" + url, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            mostrar(this, contenedorId);
        }
    };                       
}
// cargamos usando variables.
function mostrar(xml, contenedorId) {

    var nom, i, objHttp, cadena;
    objHttp = xml.responseXML;
    cadena = "";

    marca = objHttp.getElementsByTagName('marca');
    modelo = objHttp.getElementsByTagName('modelo');
    año = objHttp.getElementsByTagName('año');
    seguridad = objHttp.getElementsByTagName('seguridad');

    for (i = 0; i < marca.length; i++) {
        cadena += "coche: <b>" + marca[i].childNodes[0].nodeValue + "</b><br/>";
        cadena += "Modelo: " + modelo[i].childNodes[0].nodeValue + "<br>";
        cadena += "Año: " + año[i].childNodes[0].nodeValue + "<br>";
        cadena += "Seguridad: " + seguridad[i].childNodes[0].nodeValue + "<br/><br/>";

    }
    document.getElementById(contenedorId).innerHTML = cadena;
}
