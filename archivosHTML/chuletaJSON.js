let objeto = new Object();

objeto.nombre = "Sandra";
objeto.edad = 18;
objeto.estudios = "DAW";

document.write("Datos: "+ JSON.stringify(objeto));


function jsonParse(){

    let mostrar = prompt("Dame un json");
    let salida = "";
    var miObjeto = JSON.parse(mostrar);
    for(i in miObjeto){
        salida+="Propiedad: "+i+" = "+miObjeto[i]+'\n';
    }
    alert(salida);
}