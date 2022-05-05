function desaparecerDiv(){
    var llamarDiv= document.getElementById("cajaMuñecoNueva");
    var ocultarDiv= document.getElementById("cajaMuñeco");
    ocultarDiv.style.display="none";
    llamarDiv.style.display="block";
    

}
function encriptarTexto(){
    //var textoUsuario= document.getElementById("inputEncriptar");
    //
    var textoUsuario= document.getElementById("inputEncriptar");
    var palabraCodificada= btoa(textoUsuario.value);
    document.getElementById("pasajeDeMensaje").innerHTML=palabraCodificada;
}
function desencriptar(){
    var textoUsuario= document.getElementById("inputEncriptar");
    var palabraCodificada= atob(textoUsuario.value);
    document.getElementById("pasajeDeMensaje").innerHTML=palabraCodificada;
}
function copiarTexto(){
    var content= document.getElementById("pasajeDeMensaje").innerHTML;
    navigator.clipboard.writeText(content);
    
}


